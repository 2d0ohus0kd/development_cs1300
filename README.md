# Development

### Link to Deployed Website
https://2d0ohus0kd.github.io/development_cs1300/

### Goal and Value of the Application
Bakery App allows users to add bakery items to their cart, with an aggregator summing items' price to adjust to the cart's contents.
By allowing users to filter on types of items (sweet vs savory) and dietary restrictions, they're able to find relevant results more efficiently. With sorting capabilities, users can make financially responsible decisions more easily, as well.

### Usability Principles Considered
• Learnability: with buttons clearly distinct from plain text, and commonplace names (e.g. 'Add' and 'Remove', and 'Filters' and 'Sort by'), our webpage's functionality is easy to learn.
• Memorability: The same principles contributing to the webpage's learnability also strengthen how memorable it is. Users returning to our app will remember that filtering and sorting are at the top while adding and removing occur within each individual item.
• Efficiency: tasks can be done quickly. For instance, a user wishing to remove all items from their cart, rather than selecting 'Remove' for each individual item can select the 'Reset' button to save time.

### Organization of Components
• The component is organized such that each bakery item is a div that contains information such as title, image, price, type, dietary restrictions, etc.
• Props I am using are item, cart, setCart (App.js line 183).
• I take each item from the dataset passed in through props, as well as the cart, and then I create each bakery item using that information, with that information passed through props.
• The state the component uses is cart. The filter and sort states aren't passed into the component.

### How Data is Passed Down Through Components
Data is passed into bakeryitem through props, passing in 'item' to represent the different bakery items and 'cart,' 'setCart' to represent data about the updating cart.

### How the User Triggers State Changes
As the user clicks on buttons the state changes to reflect those clicks' functionalities. For instance, A user can change the state by clicking 'add,' and then revert to the previous state by selecting 'remove.'