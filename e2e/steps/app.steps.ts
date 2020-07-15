import { Given, When, Then, Before } from "cucumber";
import { SearchFormPage } from "../page-objects/search-form.po";
import * as chai from 'chai';
import { browser, ExpectedConditions, by } from "protractor";
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
    await browser.wait(ExpectedConditions.visibilityOf(searchForm.nameField), 5000);
    expect(await searchForm.genderField.getText()).to.equal(gender)
    expect(await searchForm.birthYearField.getText()).to.equal(birthYear);
    expect(await searchForm.eyeColorField.getText()).to.equal(eyeColor);
    expect(await searchForm.skinColorField.getText()).to.equal(skinColor);
});

When('I search for {string} planet', async (planet) => {
    await searchForm.searchForPlanets(planet)
});

Then('I see person population: {string}, climate: {string} and gravity: {string}', async (population, climate, gravity) => {
    await browser.wait(ExpectedConditions.visibilityOf(searchForm.planetNameField), 5000);
    expect(await searchForm.populationField.getText()).to.equal(population)
    expect(await searchForm.climateField.getText()).to.equal(climate);
    expect(await searchForm.gravityField.getText()).to.equal(gravity);
})

Then('I get {string} results', async (results, dataTable) => {
    expect(await searchForm.peopleResult.count()).to.equal(+results)
    
    const charactersData = await searchForm.peopleResult;
    const testData = dataTable.hashes();

    for (let index = 0; index < testData.length; index++) {
        expect(testData[index].gender).to.equal(await charactersData[index].element(by.name('gender')).getText())
        expect(testData[index].birthYear).to.equal(await charactersData[index].element(by.name('birth-year')).getText())
        expect(testData[index].eyeColor).to.equal(await charactersData[index].element(by.name('eye-color')).getText())
        expect(testData[index].skinColor).to.equal(await charactersData[index].element(by.name('skin-color')).getText())
    }
  });