import React, { useState } from "react";

function BankAccount() {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");

  const deposit = () => {
    const value = Number(amount);

    if (value > 0) {
      setBalance((prev) => prev + value);
      setAmount("");
    }
  };

  const withdraw = () => {
    const value = Number(amount);

    if (value > 0) {
      setBalance((prev) =>
        Math.max(0, prev - value)
      );

      setAmount("");
    }
  };

  return (
    <div>
      <h2>Bank Account Simulation</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />

      <button onClick={deposit}>
        Deposit
      </button>

      <button onClick={withdraw}>
        Withdraw
      </button>

      <button onClick={() => setBalance(1000)}>
        Reset
      </button>

      {balance === 0 ? (
        <p>Account Empty</p>
      ) : (
        <p>
          Available Balance: ₹{balance}
        </p>
      )}
    </div>
  );
}

export default BankAccount;