import{date} from "./datepicker"
import {FlightSelectors} from "./selectors"

export class Route{

    FlightType({flight}){
        if(flight ==='oneway'){
            cy.get('[data-bdd="farefinder-flight-form-oneway-toggle-button"]').contains('One-way').click()
        } else if(flight === 'bundle'){
            cy.get('[data-bdd="farefinder-option-bundles"]').click()
            // logic here
        }
    }

    Location({boarding = 'New York' , landing= 'France'}){
        const {ORIGIN, DESTINATION} = FlightSelectors;
        cy.get(ORIGIN).type(boarding).type('{enter}')
        cy.get(DESTINATION).type(landing).type('{enter}')

    }


    DoubleCalander({departure = 24, returning= 10}){
        date.date1(departure, returning)
    }

    SingleCalander(){
        date.date2()
    }

}
export const FlightRoute = new Route()
