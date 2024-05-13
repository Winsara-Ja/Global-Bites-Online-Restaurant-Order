import React, { useState } from "react";
import "./faq.css"; // Assuming you have a CSS file for styling

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container0">
      <h2 className="faqheader">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-button"
              aria-expanded={activeIndex === index}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample FAQ data
const faqData = [
  {
    question: "À quelle fréquence doit-on remplacer son chauffe-eau?",
    answer:
      "Aux 10 à 12 ans. Avec les années, la rouille causée par l’eau endommage le contenant de métal. Soyez aux aguets : l’apparition des premiers signes de rouille, d'humidité au toucher du réservoir et le changement de coloration de l'eau chaude (rougeâtre) sont autant de signes avant-coureurs que la durée de vie de votre chauffe-eau arrive à échéance.",
  },
  {
    question: "Why is the sky blue?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
  },
  // Add more FAQ items as needed
];

export default Accordion;
