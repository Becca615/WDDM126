import React from 'react';

const portfolioItems = [
  { img: "images/image1.jpg", title: "Project 1", description: "Logo design for a tech startup." },
  { img: "images/image2.jpg", title: "Project 2", description: "Website design for a local restaurant." },
  { img: "images/image3.jpg", title: "Project 3", description: "Branding project for a coffee shop." },
  { img: "images/image4.jpg", title: "Project 4", description: "Illustration for a children's book." }
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="gallery">
      {portfolioItems.map((item, index) => (
        <figure key={index} className="gallery-item">
          <img src={item.img} alt={item.title} />
          <figcaption>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  </section>
);

export default Portfolio;
