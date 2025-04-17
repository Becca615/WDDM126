import React from 'react';

const services = ["Logo Design", "Web Design", "Illustration", "Branding", "Print Design"];

const Services = () => (
  <section id="services">
    <h2>Services</h2>
    <ul>
      {services.map((service, index) => <li key={index}>{service}</li>)}
    </ul>
  </section>
);

export default Services;