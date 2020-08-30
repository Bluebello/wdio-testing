import base from "../base"


class navbar extends base {

    get searchBox() {
        return $('#searchTerm')
    }

    get signInButton() {
        return $('#signin_button')
    }

    get insiteNavbar() {
        return $('.nav-tabs')
    }

    get payBill(){
        return $('#pay_bills_tab')
    }

    get settingButton() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    search(text){
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    insiteNavbarIsVisible() {
        this.insiteNavbar.waitForExist()
    }

    clickPayBills(){
        this.payBill.waitForExist()
        this.payBill.click()
    }

    clickSettingButton() {
        this.settingButton.waitForExist()
        this.settingButton.click()
    }
    clickHelpButton() {
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

} export default new navbar()
