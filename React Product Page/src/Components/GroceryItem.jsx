import styles from './groceryItem.module.css'
import CartButton from './CartButton'
import { useState } from 'react'
const GroceryItem = ({props}) => {
  const[showCartBtn,setShowCartBtn] = useState(false)
  const [count,setCount] = useState(1)
  let handleCart = () => {
    setShowCartBtn(true)
  }
  let handleAddtoCart = (newCount) => {
      setCount(newCount)
  }
 
  console.log(count);
  return (
    <div className={styles.groceryItem}>
      <img src={props.image} alt="Groceries" className={styles.img}/>
      <h3 className={styles.itemName}>{props.name}</h3>
      <h5 className={styles.itemPrice}>₹{props.price}</h5>
      {count === 0 ||showCartBtn===false ? <button data-cy="add_to_cart" className={styles.btn} onClick={() => handleCart()}>Add to cart</button> : <CartButton count={count} onCountChange={handleAddtoCart}/>}
    </div>
  )
}

export default GroceryItem
