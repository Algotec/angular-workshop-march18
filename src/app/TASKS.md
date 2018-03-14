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

