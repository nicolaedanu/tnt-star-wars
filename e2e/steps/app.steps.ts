import { Given, When, Then } from "cucumber";

Given('I navigate to {string}', url => {
    console.log('given');
    console.log(url);
});
When('I search for Luke Skywalkers name',  () => {
console.log('when')
});
Then('I see Lukes details',  () => {
    console.log('then')
});