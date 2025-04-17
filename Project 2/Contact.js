import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} /><br /><br />
        <input type="submit" value="Submit" />
      </form>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>Phone: <a href="tel:yourphonenumber">your phone number</a></p>
    </section>
  );
};

export default Contact;
