import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(500);
  const [power, setPower] = useState(1000);
  const [kPrice,setKPrice] = useState(0.01)

  const increamentHandler = () => {
    if (count < 10) setCount((prev) => (prev = prev + 1));
    
  };
 
  const decreamentHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const powerHandler = (e) => {
    setPower(e.target.value);
  };

  const priceHandler=(e)=>{
    setKPrice(e.target.value)
  }

  useEffect(() => {
    setAmount(500 * count);
    setPower(1000*count)
  }, [count]);

  useEffect(() => {
    setCount(amount/500);
  }, [amount]);


  return (
    <div className={styles.main}>
      <div className={styles.actions}>
        <h1 className={styles.heading}>Number of NFT's</h1>
        <div className={styles.actions_btn}>
          <button onClick={increamentHandler}>+</button>
          <p className={styles.actions_input}>{count}</p>
          <button onClick={decreamentHandler}>-</button>
        </div>
      </div>
      <div className={styles.input_box}>
        <input
          type="range"
          min="0"
          max="5000"
          step="500"
          value={amount}
          onChange={amountHandler}
        ></input>
        <div className={styles.input_text}>
          <span>${amount}</span> <span>Investment Amount</span> <span>$5000</span>{" "}
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          step="1000"
          value={power}
          onChange={powerHandler}
        ></input>
        <div className={styles.input_text}>
          <span>{power}Th/s</span> <span>Mining Power</span> <span>10000 Th/s</span>{" "}
        </div>
        <input type="range" min="0" max="100" value={kPrice} onChange={priceHandler}></input>
        <div className={styles.input_text}>
          <span>${kPrice}</span> <span>Kadena Price</span> <span>$100</span>{" "}
        </div>
      </div>
      <div className={styles.insight_box}>
        <p className={styles.sub_heading}>Earning</p>
        <div className={styles.data_box}>
          <div>
            <p className={styles.sub_heading}>Daily</p>
            <p>0.5 KDA</p>
            <p>${(kPrice*0.5*count).toFixed(2)}</p>
          </div>
          <div>
            <p className={styles.sub_heading}>Monthly</p>
            <p>15 KDA</p>
            <p>${(kPrice*15*count).toFixed(2)}</p>
          </div>
          <div>
            <p className={styles.sub_heading}>1 Year</p>
            <p>180 KDA</p>
            <p>${(kPrice*180*count).toFixed(2)}</p>
          </div>
          <div>
            <p className={styles.sub_heading}>3 Years</p>
            <p>500 KDA</p>
            <p>${(kPrice*500*count).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
