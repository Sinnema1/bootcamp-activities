// TODO: For the Calculator object below, create a state variable `calcState` containing the fields `total` and `previousTotal`.
// Update `total` and `previousTotal` accordingly in the "Add" button handler below.

import { useState } from "react";

interface totals {
  total: number;
  previousTotal: number;
}

export default function Calculator() {
  const [calcState, setCalcState] = useState<totals>({ total: 0, previousTotal: 0});
  const [value, setValue] = useState<number>(0);

  const handleAddClick = () => {
    setCalcState({ total: calcState.total + value, previousTotal: calcState.total })
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <p>
        <input
          type="text"
          id="value"
          name="value"
          onChange={(event) => { setValue(Number(event.target.value)); }}
          value={value}
        />
      </p>
      <button className="btn btn-primary" type="button" onClick={handleAddClick}> Add </button>
      <p className="card-text">Total: {calcState.total}</p>
      <p className="card-text">Previous Total: {calcState.previousTotal}</p>
      </div>
  );
}
