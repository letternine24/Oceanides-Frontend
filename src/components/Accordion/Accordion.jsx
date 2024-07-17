import React from "react";
import "@styles/Components/Accordion.css";

const Accordion = ({ accordions }) => {
  const accordionItems = accordions.map((item) => (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${item.id}`}>
        <button
          className="accordion-button accordion-items-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item.id}`}
          aria-expanded="true"
          aria-controls={`#collapse${item.id}`}
        >
          {item.accordionTitle}
        </button>
      </h2>
      <div
        id={`collapse${item.id}`}
        className="accordion-collapse collapse show"
        aria-labelledby={`#collapse${item.id}`}
        data-bs-parent="#corsaAccordion"
      >
        <div className="accordion-body">
          <div
            className="toggle_content"
            itemProp="text"
            dangerouslySetInnerHTML={{ __html: item.accordionContent }}
          />
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="accordion accordion-items" id="corsaAccordion">
        {accordionItems}
      </div>
    </>
  );
};

export default Accordion;
