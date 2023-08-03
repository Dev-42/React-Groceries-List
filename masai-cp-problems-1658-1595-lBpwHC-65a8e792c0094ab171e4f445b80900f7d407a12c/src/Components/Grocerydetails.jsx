import {useState} from "react";
import GroceryItem from "./GroceryItem";
import styles from './groceryDetails.module.css'
let isVisible = false
const Grocerydetails = () => {
  const[groceries,getGroceries] = useState([])
  let groceriesDisplay = async() => {
    try{
      let res = await fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries')
      let data = await res.json();
      let finalData = data.data
      isVisible = true
      console.log(finalData)
      getGroceries(finalData)
    }catch(e){
      console.log(e)
    }
    
  }
  return (
    <div>
      {/* map data to grocery item use className and data-cy as given in problem description  */}
      <h1 className={styles.heading}>Groceries</h1>
      {isVisible ?  '' : <button onClick={groceriesDisplay} className={styles.btn}>Get Groceries</button>}
      <div data-cy="container" className={styles.container}>
        {groceries.map((grocery) => (
          <GroceryItem key={grocery.id} props={grocery}/>
          // console.log(props)
        ))}
      </div>
    </div>
  );
};

export default Grocerydetails;
