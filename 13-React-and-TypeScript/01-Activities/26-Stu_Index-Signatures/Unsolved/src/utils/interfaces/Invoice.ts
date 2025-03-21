import type Charge from './Charge';

//TODO: What keys and values should we expect in this `Invoice` type?
// a title as string for key and a charge as the value
interface Invoice {
  [key: string]: Charge;
}

export default Invoice;
