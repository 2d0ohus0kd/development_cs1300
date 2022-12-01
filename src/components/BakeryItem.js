// contains the information to be displayed for each bakery item
export default function BakeryItems(props){
    // specify return
    const item = props.item
    const addFunction = () => props.setCart([...props.cart, item]);
    const removeFunction = () => props.setCart(props.cart.filter(ele => ele.name !== item.name));
            
    // const addCount = () =>
    return (
        <div className="BakeryItem">
            {/* displaying the items */}
            <div className="bakeryItemName">{item.name}</div>
            <button onClick={addFunction} disabled={props.cart.includes(item)}>Add</button>
            <button onClick={removeFunction} disabled={!props.cart.includes(item)}>Remove</button>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <img src={item.image}/>
            <div>Type: {item.type}</div>
            <div>Kosher: {item.kosher.toString()}</div>
            <div>Gluten Free: {item.glutenfree.toString()}</div>
        </div>
    )

    // remove button possibility
    // disabled=(props.cartItems.has(props.item)}> Add to cart </button>
}

// remove
// cart holds items; removing: filter(item => )
// onChange, onClick,
// disabled={props.cart.includes(props.item)