import app from '../page-objects/app'
import loginPage from '../page-objects/pages/loginPage'
import navbar from '../page-objects/components/navbar'
import payNavbar from '../page-objects/components/payNavbar'
import exchangePage from '../page-objects/pages/exchangePage'


describe('e2e tests - exchange', () =>{
    it('Should log into app', () =>{
        app.openLoginPage()
        loginPage.login('username', 'password')
        navbar.insiteNavbarIsVisible()
    })

    it('Should make currency exchange', () =>{
        navbar.clickPayBills()
        payNavbar.clickPurchaseForeignCurrencyCash()
        exchangePage.selectCurrency('value', 'GBP')
        exchangePage.fillAmountValue('500')
        exchangePage.clickDollarButton()
        exchangePage.clickPurchaseButton()
        const message = exchangePage.message
        expect(message).toHaveText('Foreign currency cash was successfully purchased.')

    })
})