import type Invoice from '../../utils/interfaces/Invoice';
import './style.css';
const ChargeList = ({ invoice }: { invoice: Invoice }) => {
  return (
    <div className='ChargeList'>
      {/* TODO: What is the `Object.keys()` method, and what are we using it for here? */}
      {/* Object.keys takes in an object and returns array names of the keys */}
      {/* map goes through an array , doees the same action to each element */}
      {Object.keys(invoice).map((key) => (
        <div className='charge-div' key={key}>
          <span>
            {key}
            {/* TODO: What is this ternary operator doing ?*/}
            {/* checks to see if billed is hourly, if true, render the html, else set to null */}
            {invoice[key].billed === 'hourly' ? (
              <em>
                ({invoice[key].hours} hours @{' '}
                {invoice[key].hourlyRate?.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
                /hr)
              </em>
            ) : null}
          </span>
          <span>
            {invoice[key].price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        </div>
      ))}
      {/* TODO: What is the `Object.values()` method, and what are we using it for here?*/}
      {/* extracting the values from the object */}
      {Object.values(invoice).length ? (
        <h2>
          <span>Total:</span>
          <span>
            {Object.values(invoice)
              // TODO: What are we using the `.reduce()` method for here?
              // flattens the array into one value (after performing whatever defined actions)
              .reduce((accumulated, currentCharge) => {
                return accumulated + currentCharge.price;
              }, 0)
              .toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
          </span>
        </h2>
      ) : null}
    </div>
  );
};

export default ChargeList;
