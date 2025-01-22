export const events = [
    {
        id: 1,
        title: 'KarmaKode',
        objective: "Developers collaborate to build web-based solutions within a limited timeframe.",
        img: 'https://media.istockphoto.com/id/1125107251/vector/hackathon-background-hack-marathon-coding-event-glitch-poster-and-saturated-binary-data-code.jpg?s=612x612&w=0&k=20&c=aqnvlYk_4_8qIQi8bUbg6LQeNBBl8c-FyuSPyXCNgro='
    },
    {
        id: 2,
        title: 'Chakra Circuit',
        objective: "Build your own robot to achieve the highest speed and outrun others on the track.",
        img: 'https://media.istockphoto.com/id/1700288868/photo/engineer-asian-students-assembling-robotics-kits-learning-mechanical-control-robotics.jpg?s=612x612&w=0&k=20&c=nXRjJEJYon6PaKU-sKbuBQkIl-atDe5DcmkA-JLA_Kc='
    },
    {
        id: 3,
        title: 'Kurukshetra Gaming Showdown',
        objective: "An exciting gaming competition featuring popular games.",
        img: 'https://media.istockphoto.com/id/1700288868/photo/engineer-asian-students-assembling-robotics-kits-learning-mechanical-control-robotics.jpg?s=612x612&w=0&k=20&c=nXRjJEJYon6PaKU-sKbuBQkIl-atDe5DcmkA-JLA_Kc='
    },
    {
        id: 4,
        title: 'Ananda Fiesta',
        objective: "A series of entertaining activities including an open mic, talk rocks, and dance performances.",
        img: 'https://unsplash.com/s/photos/fun-event'
    }
];

export const eventsDetails = [
        {
            id: 2,
            image: 'https://media.istockphoto.com/id/1788155270/photo/startup-co-working-space.jpg?s=612x612&w=0&k=20&c=QJnl27cVi_pW8DCs2SoHNyBjWrcjoh8z5if0aUgMMbs=',
            title: "Robo-Obstacle Race",
            details: "The goal is to build your own robot, either wired or wireless, within the required specifications in order to obtain the highest speed possible in order to outrun other robots on the track and cross the finish line in the shortest time possible.",
            generalInfo: [
                "Team size: 3-5",
                "Entry fee: ₹350",
                "Eligibility: Student IDs Required",
                "Event Duration: 2 hours",
                "Registration Deadline: 25th January"
            ],
            rewards: [
                "1st Prize: ₹9000 + Trophy",
                "2nd Prize: ₹6000 + Trophy",
                "3rd Prize: ₹5000 + Trophy",
                "Certificates for all participants",
                "Special Mention for Best Design"
            ],
            dimensions: [
                "Max length: 30cm",
                "Max width: 30cm",
                "Max height: 25cm",
                "Max weight: 2kg",
                "Tolerance: ±5% on dimensions"
            ],
            powerSource: [
                "Electric Robots only",
                "Max voltage: 12VDC",
                "Battery: Sealed (Gel, lithium, NiCad)",
                "Backup battery recommended",
                "Charging points available at the venue"
            ],
            trackDetails: [
                "Length: 16+ meters",
                "Width: 35 cm",
                "Surface: Uneven, includes hurdles",
                "Obstacles: Marble pit, seesaw, speed breakers, curve ramps",
                "Track will be disclosed 30 minutes before the event"
            ],
            gameplay: [
                "No trials allowed",
                "Time-based scoring for successful runs",
                "Penalties for skipping obstacles",
                "Points based on obstacle difficulty",
                "Negative points for moving off track",
                "Tiebreaker: Additional run for tied teams",
                "Judges' decision is final"
            ]
        },
    // Event 1: Hackathon
    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1788155270/photo/startup-co-working-space.jpg?s=612x612&w=0&k=20&c=QJnl27cVi_pW8DCs2SoHNyBjWrcjoh8z5if0aUgMMbs=',
        title: "Web-D Hackathon",
        details: "A dynamic event where developers come together to brainstorm, build, and present innovative web solutions within a limited timeframe in a collaborative environment.",
        generalInfo: [
            "Team size: 3-5",
            "Entry fee: ₹500",
            "Eligibility: Open to all students with valid IDs",
            "Event Duration: 2 days",
            "Registration Deadline: 24th January"
        ],
        rewards: [
            "1st Prize: ₹15,000 + Trophy",
            "2nd Prize: ₹10,000 + Trophy",
            "3rd Prize: ₹7,000 + Trophy",
            "Certificates for all participants",
            "Special Award for Best Innovation"
        ],
        dimensions: [
            "Team size: Max 5 members",
            "Prototype must be hosted online (e.g., GitHub, DevPost)",
            "Report: 1-2 pages summarizing problem statement and solution",
            "Presentation: Day 2 for pitching the project"
        ],
        powerSource: [
            "Laptops and development tools provided by participants",
            "Charging stations available at the venue",
            "Backup internet facilities available"
        ],
        trackDetails: [
            "Day 1: Solution ideation and development",
            "Day 2: Project presentation and judging",
            "Judging criteria: Innovation, feasibility, and feature completeness"
        ],
        gameplay: [
            "Submit a working prototype by the deadline",
            "Ensure the project aligns with the theme",
            "Judges' decisions are final",
            "Any plagiarism leads to disqualification"
        ]
    },

    // Event 2: Robo-Obstacle Race
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/1700288868/photo/engineer-asian-students-assembling-robotics-kits-learning-mechanical-control-robotics.jpg?s=612x612&w=0&k=20&c=nXRjJEJYon6PaKU-sKbuBQkIl-atDe5DcmkA-JLA_Kc=',
        title: "Robo-Obstacle Race",
        details: "Participants must build and program their robots, either wired or wireless, to navigate an obstacle-filled track with speed and precision. The aim is to overcome hurdles and reach the finish line in the shortest time.",
        generalInfo: [
            "Team size: 3-5",
            "Entry fee: ₹350",
            "Eligibility: Open to all students with valid IDs",
            "Event Duration: 2 hours",
            "Registration Deadline: 25th January"
        ],
        rewards: [
            "1st Prize: ₹9000 + Trophy",
            "2nd Prize: ₹6000 + Trophy",
            "3rd Prize: ₹5000 + Trophy",
            "Participation certificates for all teams",
            "Special Mention for Best Design Innovation"
        ],
        dimensions: [
            "Max length: 30cm",
            "Max width: 30cm",
            "Max height: 25cm",
            "Max weight: 2kg",
            "Tolerance: ±5% on dimensions"
        ],
        powerSource: [
            "Electric Robots only",
            "Max voltage: 12VDC",
            "Battery: Sealed types (Gel, lithium, NiCad)",
            "Backup battery highly recommended",
            "Charging points available at the venue"
        ],
        trackDetails: [
            "Track length: Approximately 16 meters",
            "Track width: 35 cm",
            "Surface: Uneven, with varying textures",
            "Obstacles: Marble pit, seesaw, speed breakers, curve ramps",
            "Track layout revealed 30 minutes before the start"
        ],
        gameplay: [
            "No practice runs allowed",
            "Time-based scoring system",
            "Penalties for skipping or failing obstacles",
            "Additional points for completing tougher obstacles",
            "Negative scoring for moving off the designated track",
            "Tiebreakers resolved with a final timed run",
            "Judges' decisions are binding and final"
        ]
    },

    // Event 3: Gaming
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U1QzOFYqLbYmTliRR1UP1IorrMxHKWroLA&s',
        title: "Gaming Championship",
        details: "An exciting competition for gamers to showcase their skills in popular games like BGMI and COD. PC gaming challenges will also be included for an electrifying experience.",
        generalInfo: [
            "Team size: 4 (Individual participation allowed)",
            "Entry fee: ₹200 per player",
            "Eligibility: Open to all with valid IDs",
            "Event Duration: 1 day",
            "Registration Deadline: 22nd January"
        ],
        rewards: [
            "1st Prize: ₹12,000 + Trophy",
            "2nd Prize: ₹8,000 + Trophy",
            "3rd Prize: ₹5,000 + Trophy",
            "Participation certificates for all players",
            "Special Award for MVP of the event"
        ],
        dimensions: [
            "Devices: Android/iPhones/Tablets",
            "No emulators allowed",
            "PC specifications for PC games disclosed on-site"
        ],
        powerSource: [
            "Charging facilities available",
            "Backup devices recommended",
            "Event staff to ensure fair play"
        ],
        trackDetails: [
            "Round 1: Knockout matches",
            "Round 2: Semi-finals with advanced gameplay",
            "Round 3: Finals with real-time audience view"
        ],
        gameplay: [
            "No hacks or cheating allowed",
            "Random team allocation for individuals",
            "Participants must be present on-site",
            "Judges' decisions are final and binding"
        ]
    },

    // Event 4: Ideathon
    {
        id: 4,
        image: 'https://techfest.org/static/media/ideathon.def456.jpg',
        title: "Innovate Ideathon",
        details: "A platform for creative thinkers to propose innovative solutions to real-world problems. Teams will brainstorm, present ideas, and compete for the best innovation awards.",
        generalInfo: [
            "Team size: 3-5",
            "Entry fee: ₹300",
            "Eligibility: Open to all students with valid IDs",
            "Event Duration: 1 day",
            "Registration Deadline: 20th January"
        ],
        rewards: [
            "1st Prize: ₹10,000 + Trophy",
            "2nd Prize: ₹7,000 + Trophy",
            "3rd Prize: ₹5,000 + Trophy",
            "Participation certificates for all teams",
            "Special Mention for Most Impactful Idea"
        ],
        dimensions: [
            "Presentation: Max 10 minutes per team",
            "Report: 1-page summary of the idea",
            "Focus: Real-world applicability and innovation"
        ],
        powerSource: [
            "Projector and presentation tools available",
            "Teams must bring their own laptops",
            "Backup materials recommended"
        ],
        trackDetails: [
            "Round 1: Idea submission and shortlisting",
            "Round 2: Final presentations before judges",
            "Judging criteria: Innovation, impact, and feasibility"
        ],
        gameplay: [
            "Ideas must be original",
            "Strict adherence to the time limit",
            "Judges' decisions are final",
            "Any plagiarism leads to disqualification"
        ]
    }


]