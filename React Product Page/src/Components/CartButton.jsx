// import { useState } from "react";
import styles from './cartButton.module.css'
const CartButton = ({count,onCountChange}) => {
  let countIncrement = () => {
    onCountChange(count + 1)
  }
  let countDecrement = () => {
      onCountChange(count - 1)
  }
  return(
    <div className={styles.container}>
      <span>
      <button onClick={countDecrement} disabled={count < 1} className={styles.minusBtn} >-</button>{count}<button onClick={countIncrement} className={styles.plusBtn}>+</button>
      </span>
    </div>
  )
};

export default CartButton;
