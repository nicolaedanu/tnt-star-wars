import {ElementFinder, element, by, browser, ElementArrayFinder} from 'protractor';

export class SearchFormPage {
    queryInput: ElementFinder;
    peopleRadioBtn: ElementFinder;
    planetsRadioBtn: ElementFinder;
    searchButton: ElementFinder;

    constructor() {
        this.queryInput = element(by.id('query'));
        this.peopleRadioBtn = element(by.id('people'));
        this.planetsRadioBtn = element(by.id('planets'));
        this.searchButton = element(by.css('button'));
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
        await browser.sleep(2000);
    }
}