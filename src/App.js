import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";

// /* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
// /* ############################################################## */

function App() {
  const [cart, setCart] = useState([]);

  // sorting and filtering states
  // these will be controlled by inputs (setSortType, setFilterName)
  const [filter1, setFilter1] = useState([]);
  const [filter2, setFilter2] = useState([]);
  const [filter3, setFilter3] = useState([]);
  const [filter4, setFilter4] = useState([]);

  const [sort, setSort] = useState([]);

  const computedValueFromStates = () => {
    let sum = 0;
    cart.forEach(item => sum += item.price);
    return sum;
  }

  // compute the array to be mapped, that's filtered and sorted
  const computedFilterAndSortedArray = () => {
    return bakeryData.filter(filter1Func).filter(filter2Func).filter(filter3Func).filter(filter4Func).sort(sortFunc);
  }

  // Handle filter change
  function handleFilterClick(event) {
    console.log("Clicked", event.target.value);
    let val = event.target.value;
    if (val == "Sweet") {
      if (filter1 == 0) {
        setFilter1(val);
      }
      else {
        setFilter1(0);
      }
    }
    else if (val == "Savory") {
      if (filter2 == 0) {
        setFilter2(val);
      }
      else {
        setFilter2(0);
      }
    }
    else if (val == "kosher") {
      if (filter3 == 0) {
        setFilter3(val);
      }
      else {
        setFilter3(0);
      }
    }
    else if (val == "glutenfree") {
      if (filter4 == 0) {
        setFilter4(val);
      }
      else {
        setFilter4(0);
      }
    }
    computedFilterAndSortedArray();
  }

  
  // Handle sweet
  const filter1Func = item => {
    // if no filters applied, keep all elements for this filter
    if (filter1 == 0) {
      return true;
    }
    return item.type == filter1;
  }

  // Handle savory
  const filter2Func = item => {
    // if no filters applied, keep all elements for this filter
    if (filter2 == 0) {
      return true;
    }
    return item.type == filter2;
  }

  // Handle kosher
  const filter3Func = item => {
    // if no filters applied, keep all elements for this filter
    if (filter3 == 0) {
      return true;
    }
    return item.kosher;
  }

  // Handle gluten free
  const filter4Func = item => {
    // if no filters applied, keep all elements for this filter
    if (filter4 == 0) {
      return true;
    }
    return item.glutenfree;
  }

  function handleSortClick(event) {
    console.log("Selected", event.target.value);
    setSort(event.target.value);
    computedFilterAndSortedArray();
  }
  
  // Sort
  const sortFunc = (a,b) => {
    if (sort == "Low") {
      return a.price - b.price
    }
    else if (sort == "High") {
      return b.price - a.price
    }
  }

  // Reset cart
  const removeAllFunction = () => {
    setCart([]);
    computedValueFromStates();
  }

  // Reset sort and filter
  function resetFunction(event) {
    setFilter1(0);
    setFilter2(0);
    setFilter3(0);
    setFilter4(0);
    setSort("None");
  }

  // MAIN
  return (
    <div className="App">
      <header>
        <h1>My Bakery</h1>
        <div className="filtersort">
        <button onClick={resetFunction} id="reset">Reset</button>
          <div>
            <p>Filters:</p>
            <p className="bakeryItemName">Types:</p>
            <input type="checkbox" id="filter1" name="type" value="Sweet" onChange={handleFilterClick} checked={filter1 != 0}/>
            <label for="filter1"> Sweet</label><br/>
            <input type="checkbox" id="filter2" name="type" value="Savory" onChange={handleFilterClick} checked={filter2 != 0}/>
            <label for="filter2"> Savory</label><br/>
            <p className="bakeryItemName">Dietary Restrictions:</p>
            <input type="checkbox" id="filter3" name="kosher" value="kosher" onChange={handleFilterClick} checked={filter3 != 0}/>
            <label for="filter3"> Kosher</label><br/>
            <input type="checkbox" id="filter4" name="glutenfree" value="glutenfree" onChange={handleFilterClick} checked={filter4 != 0}/>
            <label for="filter4"> Gluten-free</label><br/>
          </div>
        <div>
          <p>Sort by:</p>
          <select onChange={handleSortClick} selected={sort}>
            <option value="None" >None</option>
            <option value="Low">Price: Low to High</option>
            <option value="High">Price: High to Low</option>
          </select>
        </div>
        <div className="cart">
          <p>Cart:</p>
          <div>Total price: {computedValueFromStates()}</div>
          {/* display what's in my cart */}
          {cart.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
      </header>

      <div className="main">
        <button onClick={removeAllFunction}>Remove All</button>
        <div className="bakeryContent">
        {computedFilterAndSortedArray().map((item, index) => (
          <BakeryItem item={item} cart={cart} setCart={setCart}/>
        ))}
        </div>
      </div>
    </div>
  )
}
export default App;