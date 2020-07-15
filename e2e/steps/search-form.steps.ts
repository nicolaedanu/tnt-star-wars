import { Given, When, Then } from 'cucumber';
import { SearchFormPage } from '../page-objects/search-form.po';
import * as chai from 'chai';
import { browser, ExpectedConditions, by } from 'protractor';
import { PlanetsPage } from '../page-objects/planets.po';
import { PeoplePage } from '../page-objects/people.po';

const expect = chai.expect;

const searchForm = new SearchFormPage();
const planets = new PlanetsPage();
const people = new PeoplePage();

Given('I navigate to {string}', async (url) => {
    await searchForm.navigateTo(url);
});
When('I search for {string} name',  async (name) => {
    await searchForm.searchForPeople(name);
});
Then('I see person gender: {string}, birth year: {string}, eye color: {string} and skin color: {string}'
, async (gender, birthYear, eyeColor, skinColor) => {
    await browser.wait(ExpectedConditions.visibilityOf(people.nameField), 5000);
    expect(await people.genderField.getText()).to.equal(gender);
    expect(await people.birthYearField.getText()).to.equal(birthYear);
    expect(await people.eyeColorField.getText()).to.equal(eyeColor);
    expect(await people.skinColorField.getText()).to.equal(skinColor);
});

When('I search for {string} planet', async (planet) => {
    await searchForm.searchForPlanets(planet);
});

Then('I see person population: {string}, climate: {string} and gravity: {string}', async (population, climate, gravity) => {
    await browser.wait(ExpectedConditions.visibilityOf(planets.planetNameField), 5000);
    expect(await planets.populationField.getText()).to.equal(population);
    expect(await planets.climateField.getText()).to.equal(climate);
    expect(await planets.gravityField.getText()).to.equal(gravity);
});

Then('I get {string} results', async (results, dataTable) => {
    expect(await people.peopleResult.count()).to.equal(+results);

    const charactersData = await people.peopleResult;
    const testData = dataTable.hashes();

    for (let index = 0; index < testData.length; index++) {
        expect(await charactersData[index].$('[name="gender"]').getText()).to.equal(testData[index].gender);
        expect(await charactersData[index].$('[name="birth-year"]').getText()).to.equal((testData[index].birthYear));
        expect(await charactersData[index].$('[name="eye-color"]').getText()).to.equal(testData[index].eyeColor);
        expect(await charactersData[index].$('[name="skin-color"]').getText()).to.equal(testData[index].skinColor);
    }
  });

Then('I get result not found', async () => {
    expect(await searchForm.notFoundField.getText()).to.equal('Not found.');
});
