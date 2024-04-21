class Login{
    UserName = '[id="email"]'
    NextButton =  '[id="next-button"]'
    Password = '[id="password"]'
    setUserName(username){
        cy.get(this.UserName).type(username)
        cy.get(this.NextButton).click()
    }

    setPassword(password){
        cy.get(this.Password).type(password)
        cy.get(this.NextButton).click()
    }
}

export default Login;