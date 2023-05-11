/// <reference types="cypress" />
import { familyBundle } from "../../support/PageObjects/bundles"
import { date } from "../../support/PageObjects/datepicker"
import { FlightLocation, FlightRoute } from "../../support/PageObjects/FlightRoute"



describe('PricelineProject', () =>{
    beforeEach('login', ()=>{
        cy.login()
    })

    it('One way Flight', ()=>{
        FlightRoute.FlightType({flight: 'oneway'})
        FlightRoute.Location({
            boarding : 'New York', 
            landing : 'Florida'})
        FlightRoute.SingleCalander()
        // cy.get('.submit-button').click()

    })


    it('bundle flight', ()=>{
        FlightRoute.FlightType({flight: 'bundle'})
        // FlightRoute.Location('New York', 'France')
        FlightRoute.DoubleCalander({
            departure: 28, 
            returning: 20}) 

        familyBundle.vehicle({
            Departing :'Morning', 
            Return :'Evening'})

        cy.get('[class="guest-picker"]').click()
        // familyBundle.familyLayout(1,3,2)
        familyBundle.familyLayout({
            rooms: 1,
            adults: 3, 
            children: [7, 9, 4]
        })

    })

    })
