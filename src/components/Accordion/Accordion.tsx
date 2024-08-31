import "./Accordion.css";
import { IAccordion } from "@/interface/components/Accordion";

const Accordion: React.FC<IAccordion> = ({ accordions }) => {
  const accordionItems = accordions.map((item, index) => (
    <div className="accordion-item" key={item.id}>
      <h2 className="accordion-header" id={`heading-${item.id}`}>
        <button
          className="accordion-button accordion-items-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${item.id}`}
          aria-expanded={index === 0 ? "true" : "false"}
          aria-controls={`collapse${item.id}`}
        >
          {item.accordionTitle}
        </button>
      </h2>
      <div
        id={`collapse${item.id}`}
        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
        aria-labelledby={`heading-${item.id}`}
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
    <div className="accordion accordion-items" id="corsaAccordion">
      {accordionItems}
    </div>
  );
};

export default Accordion;
