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
  styles: SectionStyles;
  sections: Section[];
}
