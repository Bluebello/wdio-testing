import app from '../page-objects/app'
import loginPage from '../page-objects/pages/loginPage'
import navbar from '../page-objects/components/navbar'
import Insitenavbar from '../page-objects/components/InsideNavbar'
import transactionPage from "../page-objects/pages/transactionPage";




describe('e2e test - transaction', () =>{
    it('Should log into app', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        app.openLoginPage()
        loginPage.login('username', 'password')
        navbar.insiteNavbarIsVisible()
    })

    it('Transaction filter should work', () =>{
        Insitenavbar.clicktransferTab()
        transactionPage.selectFromAccount("Savings(Avail. balance = $ 1000)")
        transactionPage.selectToAccount("Savings(Avail. balance = $ 1548)")
        transactionPage.fillAmount('1000')
        transactionPage.fillDescription('Test')
        transactionPage.clickContinueButton()
        transactionPage.clickSubmitButton()
        const message = transactionPage.message
        expect(message).toHaveText('You successfully submitted your transaction.')


    })
})