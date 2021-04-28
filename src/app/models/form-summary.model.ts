export interface Field {
  fieldName: string;
  value: number;
}

export interface Section {
  sectionName: string;
  fields: Field[];
}

export interface SectionStyles {
  fieldUIPortion: number;
  backgroundColor: string;
}

export interface FormSummary {
  title: string;
  stepperIndex: number;
  styles: SectionStyles;
  sections: Section[];
}
