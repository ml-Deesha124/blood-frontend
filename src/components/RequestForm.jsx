import React, { useState } from 'react';

function RequestForm() {
  const [request, setRequest] = useState({
    name: '',
    bloodGroup: '',
    hospital: '',
  });

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-backend-url/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Blood request submitted!');
        setRequest({ name: '', bloodGroup: '', hospital: '' }); // reset form
      } else {
        alert(result.error || 'Failed to submit request');
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
        value={request.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bloodGroup"
        placeholder="Required Blood Group"
        value={request.bloodGroup}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="hospital"
        placeholder="Hospital / Location"
        value={request.hospital}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Request</button>
    </form>
  );
}

export default RequestForm;