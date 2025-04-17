import React from 'react';

const testimonials = [
  { quote: '"[Testimonial 1]"', client: "Client 1" },
  { quote: '"[Testimonial 2]"', client: "Client 2" }
];

const Testimonials = () => (
  <section id="testimonials">
    <h2>Testimonials</h2>
    {testimonials.map((t, index) => (
      <blockquote key={index}>
        <p>{t.quote}</p>
        <cite>- {t.client}</cite>
      </blockquote>
    ))}
  </section>
);

export default Testimonials;