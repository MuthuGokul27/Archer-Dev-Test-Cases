class cardCreadientials{
    cardNumber = '[name="cardNumber"]'
    cardExpiry = '[name="cardExpiry"]'
    cardCvv = '[name="cardCvc"]'
    billingName = '[name="billingName"]'
    cardTerms = '[name="termsOfServiceConsentCheckbox"]'
    submitButton = '.SubmitButton'

    fillingCreadientials(cardnumber, cardexpiry, cardcvv, billingname){
        cy.get(this.cardNumber).type(cardnumber)
        cy.get(this.cardExpiry).type(cardexpiry)
        cy.get(this.cardCvv).type(cardcvv)
        cy.get(this.billingName).type(billingname)
        cy.get(this.cardTerms).check()
        cy.get(this.submitButton).click()
}

}

export default cardCreadientials;