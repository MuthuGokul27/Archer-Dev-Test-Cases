describe("Login To Application", () => {

  beforeEach("bypass login", () => {
    cy.visit("/", {
      auth: {
        username: "tartlabs",
        password: "T@rtL@bs",
      },
    });
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Sign in");
    });
  });

it("LogintoApplication", () =>{
  cy.loginToApplication("muthugokul027@gmail.com", "password")
  })
});


