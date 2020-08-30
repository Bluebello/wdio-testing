import app from '../page-objects/app'
import loginPage from '../page-objects/pages/loginPage'
import navbar from '../page-objects/components/navbar'
import payNavbar from "../page-objects/components/payNavbar";
import payPage from '../page-objects/pages/payPage'


describe("e2e test pay", () =>{
    it('Should log into app', () => {
        app.openLoginPage()
        loginPage.login('username', 'password')
        navbar.insiteNavbarIsVisible()
})
    it('should may payment', () =>{
        navbar.clickPayBills()
        payNavbar.clickPay()
        payPage.selectPayee('value', 'apple')
        payPage.selectAccount('Loan')
        payPage.fillAmount('500')
        payPage.fillDate('2020-03-31')
        payPage.fillDescription("Test")
        payPage.clickSaveButton()
        const message = payPage.message
        expect(message).toHaveText('The payment was successfully submitted.')

    })

})