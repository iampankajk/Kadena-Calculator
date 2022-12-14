import React, { useEffect, useState } from "react";
import styles from "./Calculator.module.css";
const min=1

const Calculator = () => {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(500);
  const [power, setPower] = useState(0.4);
  const [kPrice,setKPrice] = useState(0.01)
const fetchData = async()=>{
  let data = await fetch("https://www.binance.com/bapi/composite/v1/public/marketing/symbol/list")
  data = await data.json()
  data = data.data.filter(item=>item.name==='KDA');
  setKPrice(data[0].price)
}

 useEffect(()=>{
  fetchData()
 },[])

  const increamentHandler = () => {
    if (count < 10) setCount((prev) => (prev = prev + 1));
    
  };
 
  const decreamentHandler = () => {
    if (count > 1) setCount(count - 1);
  };

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };


  const priceHandler=(e)=>{
    setKPrice(e.target.value)
  }

  useEffect(() => {
    setAmount(500 * count);
    setPower(0.4*count)
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
          min="500"
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
          max="4"
          step="1"
          value={power}
          
        ></input>
        <div className={styles.input_text}>
          <span>{power.toFixed(2)}Th/s</span> <span>Mining Power</span> <span>4 Th/s</span>{" "}
        </div>
        <input type="range" min={min} max="100" value={kPrice} onChange={priceHandler}></input>
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
