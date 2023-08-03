import styles from './groceryItem.module.css'
const GroceryItem = ({props}) => {

  return (
    <div className={styles.groceryItem}>
      <img src={props.image} alt="Groceries" className={styles.img}/>
      <h3 className={styles.itemName}>{props.name}</h3>
      <h5 className={styles.itemPrice}>₹{props.price}</h5>
      <button data-cy="add_to_cart" className={styles.btn}>Add to cart</button>
    </div>
  )
}

export default GroceryItem
