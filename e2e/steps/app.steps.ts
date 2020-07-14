import { Given, When, Then } from "cucumber";
import { SearchFormPage } from "../page-objects/search-form.po";

const searchForm = new SearchFormPage();

Given('I navigate to {string}', async (url) => {
    await searchForm.navigateTo(url)
});
When('I search for {string} name',  async (name) => {
    await searchForm.searchForPeople(name)
});
Then('I see Lukes details',  () => {
    console.log('then')
});