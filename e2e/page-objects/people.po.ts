import { ElementFinder, ElementArrayFinder, $, $$} from 'protractor';

/*
* PeoplePage class that stores all elements and functions
* related to people-result
*/
export class PeoplePage {
    nameField: ElementFinder;
    genderField: ElementFinder;
    birthYearField: ElementFinder;
    eyeColorField: ElementFinder;
    skinColorField: ElementFinder;
    peopleResult: ElementArrayFinder;

    constructor() {
        this.nameField = $('[name="char-name"]');
        this.genderField = $('[name="gender"]');
        this.birthYearField = $('[name="birth-year"]');
        this.eyeColorField = $('[name="eye-color"]');
        this.skinColorField = $('[name="skin-color"]');
        this.peopleResult = $$('#people-result app-character');
    }
}
