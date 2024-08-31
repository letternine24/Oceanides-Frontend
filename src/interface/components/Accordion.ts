export interface IAccordion {
  accordions: Accordion[];
}

interface Accordion {
  id: string;
  accordionTitle: string;
  accordionContent: string;
}
