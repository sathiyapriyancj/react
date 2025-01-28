/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div
          className={`item ${openIndex === index ? "open" : ""}`} // Add "open" class to the clicked FAQ
          key={index}
          onClick={() => handleClick(index)} // Handle click event
        >
          <span className="number">{index + 1}</span>
          <h1 className="title text">{faq.title}</h1>
          <span className="icon">-</span>
          {openIndex === index && (
            <p className="content-box">{faq.text}</p>
          )}{" "}
          {/* Conditional rendering */}
        </div>
      ))}
    </div>
  );
}
