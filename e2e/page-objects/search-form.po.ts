import {ElementFinder, element, by, browser} from 'protractor';

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
        await this.searchButton.click();
    }

    async searchForPlanets(queryValue: string) {
        await this.planetsRadioBtn.click();
        await this.queryInput.sendKeys(queryValue);
        await this.searchButton.click();
    }
}
