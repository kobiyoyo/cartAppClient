export type SizeType = "small" | "middle" | "large" | undefined;

export type FormInputValues = {
  name: string;
  placeholder?: string;
  size: SizeType;
  label?: string;
};
