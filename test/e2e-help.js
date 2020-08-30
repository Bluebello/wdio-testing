import app from '../page-objects/app'
import loginPage from '../page-objects/pages/loginPage'
import navbar from '../page-objects/components/navbar'
import helpPage from "../page-objects/pages/helpPage";


describe('e2e-help test', () =>{
    it('Should log into app', () => {
        app.openLoginPage()
        loginPage.login('username', 'password')
        navbar.insiteNavbarIsVisible()
    })

    it('Should load help content', () =>{
        navbar.clickSettingButton()
        navbar.clickHelpButton()
        const title = helpPage.title
        expect(title).toHaveText("How do I log into my account?")
        helpPage.clickOnTransferLink()
        expect(title).toHaveText('How do I transfer funds?')
        helpPage.clickOnPayBillLink()
        expect(title).toHaveText("How do I pay bills?")



    })
})