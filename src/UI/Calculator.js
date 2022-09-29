import styles from "./Calculator.module.css";

const Calculator = () => {

    const increamentHandler = ()=>{
        console.log("+")
    }
    const decreamentHandler = ()=>{
        console.log("-")
    }
  return (
    <div className={styles.main}>
      <div className={styles.actions}>
        <h1 className={styles.heading}>Number of NFT's</h1>
        <div className={styles.actions_btn}>
          <button onClick={increamentHandler}>+</button>
          <p className={styles.actions_input}>1</p>
          <button onClick={decreamentHandler}>-</button>
        </div>
      </div>
      <div className={styles.input_box}>
        <input type="range" min="0" max="5000"></input>
        <div className={styles.input_text}>
          <span>$0</span> <span>Investment Amount</span> <span>$5000</span>{" "}
        </div>
        <input type="range" min="0" max="5000"></input>
        <div className={styles.input_text}>
          <span>$0</span> <span>Mining Power</span> <span>$5000</span>{" "}
        </div>
        <input type="range" min="0" max="5000"></input>
        <div className={styles.input_text}>
          <span>$0</span> <span>Kadena Price</span> <span>$5000</span>{" "}
        </div>
      </div>
      <div className={styles.insight_box}>
        <p className={styles.sub_heading}>Earning</p>
        <div className={styles.data_box}>
          <div>
            <p className={styles.sub_heading}>Daily</p>
            <p>0.5 KDA</p>
            <p>$1</p>
          </div>
          <div>
            <p className={styles.sub_heading}>Monthly</p>
            <p>0.5 KDA</p>
            <p>$1</p>
          </div>
          <div>
            <p className={styles.sub_heading}>1 Year</p>
            <p>0.5 KDA</p>
            <p>$1</p>
          </div>
          <div>
            <p className={styles.sub_heading}>3 Years</p>
            <p>0.5 KDA</p>
            <p>$1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
