import { useState } from "react";

export const AssetTranfer = () => {
  const [totalA, setTotalA] = useState(1000);
  const [totalB, setTotalB] = useState(800);
  const [amount, setAmount] = useState("");

  // function to handle transaction from A to B
  const handleTransactionAB = () => {
    if (amount > 0 && totalA >= amount) {
      setTotalA(totalA - amount);
      setTotalB(totalB + amount);
      alert(`transfering $${amount} to  Asov`);
      // reset amount input after processing
      setAmount("");
    }else{
      alert(`insufficent fund available bal: $${totalA}`)
    }
  };
  // function to handle transaction from B to A
  const handleTransactionBA = () => {
    if (amount > 0 && totalB >= amount) {
      setTotalB(totalB - amount);
      setTotalA(totalA + amount);
      alert(`transfering $${amount} to  climaxy`);

      // reset amount input after processing
      setAmount("");
    }else{
      alert(`insufficent fund available bal: $${totalB}`)
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1> AssetTranfer</h1>
      <div className="">
        <div className="d-flex ">
          <h4 className="d-flex p-4 ">Climaxy Bal:${totalA}</h4>
          <h4 className="d-flex p-4 ">Asov Bal:${totalB}</h4>
        </div>
        <p>Exchange between climaxy and Asov</p>
        <div>
          <label htmlFor="amount">Transaction Amount:</label>
          <input
            placeholder="Exchange $"
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
          <div className="d-flex  align-items-center justify-content-center">
            <button
              className="d-flex m-4  p-2 bg-warning"
              onClick={handleTransactionAB}
            >
              {" "}
              Climaxy
            </button>
            <button
              className="d-flex m-4 p-2  bg-warning"
              onClick={handleTransactionBA}
            >
              Asov
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
