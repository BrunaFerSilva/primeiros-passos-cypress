class MyInfoPage {

    selectorsList() {
        const selectors = {
           
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='dd-mm-yyyy']",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
            comboBoxSelection: ".oxd-select-text--arrow",
            selectText: ".oxd-select-dropdown > :nth-child(2)"
        }

        return selectors
    }

    fillPersonalDetails(firstName,lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        }
        *//cy.get(this.selectorsList().genericField).eq(3).clear().type(nickname)//*
    
    
    fillEmployDetails(employeeId, otherId, driversLicenseNumber, expiryDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    fillStatus() {
        cy.get(this.selectorsList().comboBoxSelection).eq(0).click({force: true})
        cy.get(this.selectorsList().selectText).click()
        cy.get(this.selectorsList().comboBoxSelection).eq(1).click({force: true})
        cy.get(this.selectorsList().selectText).click()
    }

        saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close') 
    }
}

export default MyInfoPage