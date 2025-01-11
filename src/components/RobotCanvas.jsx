import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

function RobotCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    canvasRef.current.appendChild(renderer.domElement);

    // Create robot head
    const headGeometry = new THREE.BoxGeometry(2, 2, 2);
    const headMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ff88,
      emissive: 0x00ff88,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);

    // Add eyes
    const eyeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x00ffff });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    
    leftEye.position.set(-0.5, 0.3, 1);
    rightEye.position.set(0.5, 0.3, 1);
    
    head.add(leftEye);
    head.add(rightEye);

    scene.add(head);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x00ff88, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    camera.position.z = 5;

    // Animation
    gsap.to(head.rotation, {
      y: Math.PI * 2,
      duration: 8,
      repeat: -1,
      ease: "none"
    });

    gsap.to(head.position, {
      y: 0.2,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut"
    });

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={canvasRef} className="robot-canvas"></div>;
}

export default RobotCanvas;