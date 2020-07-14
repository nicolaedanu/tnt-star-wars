import { Given, When, Then, Before } from "cucumber";
import { SearchFormPage } from "../page-objects/search-form.po";
import * as chai from 'chai';
import { browser } from "protractor";
// import * as chaiAsPromissed from 'chai-as-promised';

const expect = chai.expect;

const searchForm = new SearchFormPage();

Given('I navigate to {string}', async (url) => {
    await searchForm.navigateTo(url)
});
When('I search for {string} name',  async (name) => {
    await searchForm.searchForPeople(name)
});
Then('I see person gender: {string}, birth year: {string}, eye color: {string} and skin color: {string}', async (gender, birthYear, eyeColor, skinColor) => {
    expect(await searchForm.genderField.getText()).to.equal(gender)
    expect(await searchForm.birthYearField.getText()).to.equal(birthYear);
    expect(await searchForm.eyeColorField.getText()).to.equal(eyeColor);
    expect(await searchForm.skinColorField.getText()).to.equal(skinColor);
});