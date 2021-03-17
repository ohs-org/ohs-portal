export interface Field {
  fieldName: string;
  value: number;
}

export interface Section {
  sectionName: string;
  fields: Field[];
}

export interface FormSummary {
  title: string;
  sections: Section[];
}
