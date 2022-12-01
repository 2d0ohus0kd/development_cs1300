# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
Bakery App allows users to add bakery items to their cart, with an aggregator summing items' price to adjust to the cart's contents.
Filter types, reasoning behind value of those
### Link to your deployed web application running online


### Usability Principles Considered
• Learnability: with buttons clearly distinct from plain text, and commonplace names (e.g. 'Add' and 'Remove', and 'Filters' and 'Sort by'), our webpage's functionality is easy to learn
• Memorability: The same principles contributing to the webpage's learnability also strengthen how memorable it is. Users returning to our app will remember that filtering and sorting are at the top while adding and removing occur within each individual item
• Efficiency: tasks can be done quickly. For instance, a user wishing to remove all items from their cart, rather than selecting 'Remove' for each individual item can select the 'Reset' button to save time.

### Organization of Components
• Props I am using are item, cart, setCart (App.js line 183)
• My BakeryItem component uses the props above to create buttons adding items to the cart. 
• States: one state for the cart keeping track of items in the cart; 4 states for filters (1 for each); 1 state for sorting (App.js lines 13-22)

### How Data is Passed Down Through Components


### How the User Triggers State Changes
• As the user clicks on buttons the state changes to reflect those clicks' functionalities. For instance, A user can change the state by clicking 'add,' and then revert to the previous state by selecting 'remove'


<!-- QUESTIONS FOR TA: readme, deployment -->
<!-- notes: add type title above filter sets -->
<!-- readme q: explain the data being passed into bakeryitem through props. the reasoning behind item, cart, etc selections -->