import React from 'react';
import { Lights } from '../Lights/Lights.jsx';
import './Dashboard.css';

export const Dashboard = ({ data }) => {
  const { lights, climate, blinds, energyConsumption } = data;
  return (
    <>
      <main className="dashboard">
        <Lights lights={lights} />
      </main>
    </>
  );
};
