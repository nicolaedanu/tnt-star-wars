import { ElementFinder, element, by } from 'protractor';

export class PlanetsPage {
    planetNameField: ElementFinder;
    populationField: ElementFinder;
    climateField: ElementFinder;
    gravityField: ElementFinder;

    constructor() {
        this.planetNameField = element(by.name('planet-name'));
        this.populationField = element(by.name('population'));
        this.climateField = element(by.name('climate'));
        this.gravityField = element(by.name('gravity'));
    }
}
