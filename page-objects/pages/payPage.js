import base from '../base'

class payPage extends base{
    get payee(){
        return $("#sp_payee")
    }

    get account() {
        return $('#sp_account')
    }

    get amount() {
        return $('#sp_amount')
    }

    get date(){
        return $('#sp_date')
    }

    get description(){
        return $('#sp_description')
    }

    get saveButton(){
        return $("#pay_saved_payees")
    }

    get message(){
        return $('#alert_content')
    }

    selectPayee(attribute, value){
        this.payee.waitForExist()
        this.payee.selectByAttribute(attribute, value)
    }

    selectAccount(text){
        this.account.waitForExist()
        this.account.selectByVisibleText(text)
    }
    fillAmount(text){
        this.amount.setValue(text)
    }

    fillDate(text){
        this.date.setValue(text)
    }

    fillDescription(text){
        this.description.setValue(text)
    }

    clickSaveButton(){
        this.saveButton.click()
    }


}
export default new payPage()