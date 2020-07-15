import { ElementFinder, ElementArrayFinder, element, by } from 'protractor';

export class PeoplePage {
    nameField: ElementFinder;
    genderField: ElementFinder;
    birthYearField: ElementFinder;
    eyeColorField: ElementFinder;
    skinColorField: ElementFinder;
    peopleResult: ElementArrayFinder;

    constructor() {
        this.nameField = element(by.name('char-name'));
        this.genderField = element(by.name('gender'));
        this.birthYearField = element(by.name('birth-year'));
        this.eyeColorField = element(by.name('eye-color'));
        this.skinColorField = element(by.name('skin-color'));
        this.peopleResult = element.all(by.css('#people-result app-character'));
    }
}
