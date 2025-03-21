// TODO: Fill in the Advertisement component below to include the three string fields `companyName`, `productDescription` and `price`.
export interface AdProps {
  companyName: string;
  productDescription: string;
  price: number;
};

function Advertisement(props: AdProps) {
  return (
    <div className="advertisement">
      <h2>{props.companyName}</h2>
      <p>{props.productDescription}</p>
      <p>Price: ${props.price}</p>
    </div>
  );
}

export default Advertisement;