interface Charge {
  // TODO: What type is the `billed` key being set as?
  // the return value is expected to be either fixed or hourly as a union type
  billed: 'fixed' | 'hourly';
  // TODO: Why are these keys optional?
  // if fixed, there would not be hours or hourly rate
  hours?: number;
  hourlyRate?: number;
  price: number;
}

export default Charge;
