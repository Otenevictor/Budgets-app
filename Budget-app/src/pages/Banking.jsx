import { useState } from "react";
import Navhome from "../component/NavHome";
import { AssetTranfer } from "./Bankings/AssetTranfer";

// function Banking() {
//     // const [add, setAdd] = useState('')
//     // const [substract, setSubstract] = useState('')
//     const [total, setTotal] = useState(0);

//     // function to handle deposit
//     const handleDeposit = (amount) => {
//         setTotal(total + amount);
//     }
// // function to handle credit
// const handleCredit = (amount) => {
//     setTotal(total - amount);
// }

//     return (
//       <div>
//         <h1>Banking</h1>
//         <h4>Total Bal: ${total}</h4>
//         <button onClick={() => handleDeposit(100)}>Deposit $100</button>
//         <button onClick={() => handleCredit(100)}>Credit $50</button>

//       </div>
//     )
//   }
function Banking() {
  const [total, setTotal] = useState(89);
  const [depositAmount, setDepositAmount] = useState("");
  const [creditAmount, setCreditAmount] = useState("");

  const handleDeposit = () => {
    if (depositAmount >= 0) {
      setTotal((prevTotal) => prevTotal + parseFloat(depositAmount));
      // reset deposit amount input after processing
      alert(`you are reciving $${depositAmount} to your initail bal $${total}`);
      setDepositAmount("");
    } else {
      alert("error amount less than zero");
    }
  };
  const handleCredit = () => {
    if (creditAmount > 0 && total >= creditAmount) {
      setTotal(total - creditAmount);
      alert(`you are sending $${creditAmount} from your initail bal $${total}`);
      // reset deposit amount input after processing
      setCreditAmount("");
    } else {
      alert("insufficient fund");
    }
  };

  return (
    <>
      <Navhome />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1>Banking</h1>
        <h4>Total Bal: ${total}</h4>
        <div>
          <label htmlFor="depositAmount">Deposit Amount:</label>
          <input
            placeholder="receive income"
            type="number"
            id="depositAmount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
          />
          <button onClick={handleDeposit}>Deposit</button>
        </div>
        <div>
          <label htmlFor="CreditAmount">Credit Amount:</label>
          <input
            placeholder="send income"
            type="number"
            id="creditAmount"
            value={creditAmount}
            onChange={(e) => setCreditAmount(parseFloat(e.target.value))}
          />
          <button onClick={handleCredit}>Credit</button>
        </div>
        <div>
            <AssetTranfer/>
        </div>
      </div>
    </>
  );
}

export default Banking;
