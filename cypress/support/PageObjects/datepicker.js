export class datepicker{
    date1(departure, returnDay){
        cy.get('.form-combined__input1 > .picker__overlay').click()
        cy.get('.datepicker').find('[class="day-availability"]').contains(departure).click()
        cy.get('.datepicker').find('[class="day-availability"]').contains(returnDay).click()
    }

    date2(){
        cy.get('[class="date-picker-relative-container"]').click()
        cy.get('[aria-selected="true"]').invoke('text').then(text =>{
           let newDate = (+text+7)
            cy.wrap(newDate)
            cy.contains(newDate).click()

        })
        

    }
   
    
}
export const date = new datepicker()