export default interface Product {
  // TODO: update this interface to match the specifications listed in the README.
  readonly id: number;
  readonly productName: string;
  readonly productDescription: string;
  readonly price: number;
  quantity: number;
  readonly tags: readonly string[];
  readonly purchase?: (id: number) => void;
}
