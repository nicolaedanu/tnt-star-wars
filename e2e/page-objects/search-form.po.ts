import {ElementFinder, element, by, browser} from 'protractor';

/*
* SearchFormPage class that stores all elements and functions
* related to card-body
*/
export class SearchFormPage {
    queryInput: ElementFinder;
    peopleRadioBtn: ElementFinder;
    planetsRadioBtn: ElementFinder;
    searchButton: ElementFinder;
    notFoundField: ElementFinder;

    constructor() {
        this.queryInput = element(by.id('query'));
        this.peopleRadioBtn = element(by.id('people'));
        this.planetsRadioBtn = element(by.id('planets'));
        this.searchButton = element(by.css('button'));
        this.notFoundField = element(by.id('no-result'));
    }

    async navigateTo(url) {
        url = url === 'localhost' ? 'http://localhost:4200/' : url;
            await browser.get(url);
    }

    async searchForPeople(queryValue: string) {
        await this.peopleRadioBtn.click();
        await this.queryInput.sendKeys(queryValue);
        // we could potentially check here if queryInput.getAttribute('value') is queryValue
        await this.searchButton.click();
    }

    async searchForPlanets(queryValue: string) {
        await this.planetsRadioBtn.click();
        await this.queryInput.sendKeys(queryValue);
        // we could potentially check here if queryInput.getAttribute('value') is queryValue
        await this.searchButton.click();
    }
}
