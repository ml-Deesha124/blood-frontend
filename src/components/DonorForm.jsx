import React, { useState } from 'react';

function DonorForm() {
  const [donor, setDonor] = useState({
    name: '',
    bloodGroup: '',
    location: '',
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/donors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donor),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Donor registered successfully!');
        setDonor({ name: '', bloodGroup: '', location: '' });
      } else {
        alert(result.error || 'Failed to register donor');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={donor.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bloodGroup"
        placeholder="Blood Group (e.g., B+)"
        value={donor.bloodGroup}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="City / Area"
        value={donor.location}
        onChange={handleChange}
        required
      />
      <button type="submit">Register as Donor</button>
    </form>
  );
}

export default DonorForm;