import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import EventDetails from './components/EventsDetails.jsx';
import HeroSection from './components/HeroSection.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import './index.css';
import EventList from './components/EventList.jsx';
import Team from './components/Team.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <CountdownTimer />
            <HeroSection />
            <EventList />
          </>
        ),
      },
      {
        path: '/auth',
        element: <RegisterForm />,
      },
      {
        path: 'events',
        element: <EventList />,
      },
      {
        path: 'event-details/:id',
        element: <EventDetails />,
      },
      {
        path: 'teams',
        element: <Team />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);