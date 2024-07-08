import React, { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import './App.css'

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "+91",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const submit = () => {
    fetch("https://codebuddy.review/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Data submitted successfully");
        } else {
          alert("Failed to submit data");
        }
      })
      .catch((error) => {
        alert("An error occurred: " + error.message);
      });
  };

  switch (step) {
    case 1:
      return (
        <Form1
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Form2
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Form3
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          submit={submit}
        />
      );
    default:
      return <div>Unknown step</div>;
  }
};

export default App;
