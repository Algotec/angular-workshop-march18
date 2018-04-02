#Angular Workshop 

## Day 1 

### Exercise  1 - Build a clock component
This component shows the current time 
Render it at the top of the page

## Day 2 

### Exercise  1 - Build a count-down component
#### step 1 -  Countdown component
This component gets timestamp as @Input and counts down to it
Show minutes and seconds remaining
When time ends it emits (@Output) a (due) event

#### step 2 -  Render countdown per Pets
Render the count-down component at the Pet-renderer component
providing nextFeedAt as input for [to].
In the PetsListComponent add a Feed button, when clicked it delegated to eventually call the
feed method of the pet, updating the lastFed timestamp.
If the due event has elapsed, pet is going to sleep
make sure that if the pet is fed the timer is reset and the pet becomes awake.

### Exercise  2 (HW) - Make the shopping cart + add 3rd party lib
#### step 1 -  Build a shopping-cart component

This component gets the shopping list as @Input (so it is reusable)
renders items with X button to remove them
When item removed it emits (@Output) a (itemRemoved) event

Refactor existing shop front to render <shop-list> and <shopping cart>
move existing shop-list logic and template to new shop-list component
Each ShopItem in the shop-list should render a shop-item-renderer component which will render the
 item name and price and render parent projected content that in our case will be a buy button that upon click adds the item to the shoppinng cart
(via wraper shop-front component and the shopService)
render your shopping list in shop-front, position the cart on right of the screen.
connect inputs and outputs to make shop-front the only component that gets the shopService, the rest passes as inputs/outputs
```` <pre>`
<shop-front>
 <shopping-list>
  <shop-item-renderer>
    <button>BUY</button>
  </shop-item-renderer>
 </shopping-list>
 <shopping-cart></shopping-cart>
</shop-front>`
</pre>

#### step 2 -  add Angular Material and use ripple


install npm modules - @angular/material, @angular/cdk, hammerjs
add prebuilt themes and fonts as explained [here](https://material.angular.io/guide/getting-started) 
import relevant ngModules in SharedModule to be used across the project (up to your choice of components to style)
 
Use the directives/components you want by using selectors/attributes as explained in the library API docs
(see https://material.angular.io/components/categories for a doc for each component - switch to API view)
 
you can add specific styles via styles/styleUrls in the components to make it yours…

if you have trouble you can see my first commit (c01940c) for an example which includes configuration and styling of the shop ,
do the same for pet’s module components


## Day 3

### Exercise  1 - make shop details component
Allow the user to click on shop items and reach a page where the item details are displayed 
(name, price - you can add a random picture if you like ;-)
  in the bottom of the page add a "back to list button"
  

### Exercise 2 - Make the shop protected by username and password

#### step1 - make sure the registeration.component works as a form - 
add necessary angular forms primitives to allow
collecting the form values - make the username required and password validated as atleast 5 chars.

#### step 2 - make a route for registration 
add a link from login page or from top bar)- you will need another component to wrap the registeration component to provide the title input and 
handle the submit event
#### step 3 - improve service and connect everything
 allow checking/adding users via the AuthService - either do it in-memory or via the REST server
 'http://localhost:3003/data/users'
 use POST for registeration and for login use the following funny "logic": 
 --> get all users
 --> check if there is one with same username& password
  make sure shop admin is protected.
  
### Exercise 3 - more user details

expand the user registration to accommodate all the details and rules found in the new user.model.ts file.
change the HTML to include all form fields and validation logic + error messages
you can use either template or model driven forms, password retype is a custom validation which can be done on 
either control or group level.


## Day 4

### Exercise  1 - convert shop state&actions to use the store

##### step 1 write the actions and interface for state
##### step 2 write the reducer, services dispatch action
##### step 3 refactor state from services into the to store and use in components via observable api 
