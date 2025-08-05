import React from 'react';
import DonorForm from './DonorForm';
import RequestForm from './RequestForm';

function Home() {
  return (
    <div className="home-container">
      <div className="form-section">
        <h2>Become a Donor</h2>
        <DonorForm />
      </div>
      <div className="form-section">
        <h2>Request Blood</h2>
        <RequestForm />
      </div>
    </div>
  );
}

export default Home;