export class bundles{

    familyLayout({rooms, adults, children}){
        for(let n=1; n<rooms; n++){
            cy.get('[data-bdd="farefinder-occupant-selector-package-rooms-button-increase"]').click()
        }

        if(adults < 2){
            cy.get('[data-bdd="farefinder-occupant-selector-package-adults-button-decrease"]').click()
        } 
             else if(adults >= 2){
                 for(let n =2; n < adults; n++){
                     cy.get('[data-bdd="farefinder-occupant-selector-package-adults-button-increase"]').click()
                  }
        }

        for(let n =0; n<= children.length; n++){
            cy.get('[data-bdd="farefinder-occupant-selector-package-children-button-increase"]').click()
            
            cy.get('[aria-label="Child `${n}` age"]').click()
        }

    }

    vehicle({Departing = 'Morning', Return= 'Evening'}){
        cy.get('[data-bdd="farefinder-package-bundleoption-car"]').click()
        cy.get('[name="carPickupTime"]').select(Departing)
        cy.get('[name="carDropoffTime"]').select(Return)
       
    }

}
export const familyBundle = new bundles()