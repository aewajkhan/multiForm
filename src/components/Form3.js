import React, { useState } from 'react';

const Form3 = ({ formData, setFormData, prevStep, submit }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const phoneRegex = /^\d{10}$/;

    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Phone number must be a 10 digit number';
    }

    if (!formData.acceptTermsAndCondition) {
      errors.acceptTermsAndCondition = 'You must accept terms and conditions';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      submit();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form 3</h2>
      <div>
        <label>Country Code:</label>
        <select
          value={formData.countryCode}
          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
          required
        >
          <option value="+91">India (+91)</option>
          <option value="+1">America (+1)</option>
        </select>
        {errors.countryCode && <span>{errors.countryCode}</span>}
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          required
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.acceptTermsAndCondition}
            onChange={(e) => setFormData({ ...formData, acceptTermsAndCondition: e.target.checked })}
            required
          /> I accept terms and conditions
        </label>
        {errors.acceptTermsAndCondition && <span>{errors.acceptTermsAndCondition}</span>}
      </div>
      <button type="button" onClick={prevStep}>Back</button>
      <button type="submit">Save</button>
    </form>
  );
};

export default Form3;
