import React, { useState } from 'react';

const Form2 = ({ formData, setFormData, nextStep, prevStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const nameRegex = /^[A-Za-z]+$/;
    const minNameLength = 2;
    const maxNameLength = 50;

    if (!formData.firstName || !nameRegex.test(formData.firstName) || formData.firstName.length < minNameLength || formData.firstName.length > maxNameLength) {
      errors.firstName = 'First name must be alphabetic and between 2 to 50 characters';
    }

    if (formData.lastName && !nameRegex.test(formData.lastName)) {
      errors.lastName = 'Last name must be alphabetic';
    }

    if (!formData.address || formData.address.length < 10) {
      errors.address = 'Address must be at least 10 characters long';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 2</h2>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          required
        />
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
        />
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div>
        <label>Address:</label>
        <textarea
          value={formData.address}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          required
        ></textarea>
        {errors.address && <span>{errors.address}</span>}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Save and Next</button>
    </form>
  );
};

export default Form2;
