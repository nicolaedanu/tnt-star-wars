import {ElementFinder, element, by, browser, ElementArrayFinder} from 'protractor';

export class SearchFormPage {
    queryInput: ElementFinder;
    peopleRadioBtn: ElementFinder;
    planetsRadioBtn: ElementFinder;
    searchButton: ElementFinder;
    // people items
    nameField: ElementFinder;
    genderField: ElementFinder;
    birthYearField: ElementFinder;
    eyeColorField: ElementFinder;
    skinColorField: ElementFinder;
    constructor() {
        this.queryInput = element(by.id('query'));
        this.peopleRadioBtn = element(by.id('people'));
        this.planetsRadioBtn = element(by.id('planets'));
        this.searchButton = element(by.css('button'));

        // people items
        this.nameField = element(by.name('char-name'));
        this.genderField = element(by.name('gender'));
        this.birthYearField = element(by.name('birth-year'));
        this.eyeColorField = element(by.name('eye-color'));
        this.skinColorField = element(by.name('skin-color'));

    }

    async navigateTo(url) {
        if (url === 'localhost') {
            await browser.get('http://localhost:4200/');
        } else {
            await browser.get(url);
        }
    }

    async searchForPeople(queryValue: string) {
        await this.peopleRadioBtn.click();
        await this.queryInput.sendKeys(queryValue);
        // TODO check for input value
        await this.searchButton.click();
    }

    async searchForPlanets(queryValue: string) {
        await this.planetsRadioBtn.click();
        await this.queryInput.sendKeys(queryValue);
        // TODO check for input value
        await this.searchButton.click();
    }
}