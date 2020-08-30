import base from '../base'

class transactionPage extends  base{

    get fromAccount() {
        return $('#tf_fromAccountId')
    }

    get toAccount(){
        return $('#tf_toAccountId')
    }

    get amount(){
        return $('#tf_amount')

    }

    get description() {
        return $('#tf_description')
    }

    get continueButton() {
        return $('#btn_submit')
    }

    get submitButton() {
        return $('#btn_submit')
    }

    get message() {
        return $('.alert-success')
    }




    selectFromAccount(text){
        this.fromAccount.waitForExist()
        this.fromAccount.selectByVisibleText(text)
    }
    selectToAccount(text){
        this.toAccount.waitForExist()
        this.toAccount.selectByVisibleText(text)
    }

    fillAmount(text){
        this.amount.setValue(text)
    }

    fillDescription(text) {
        this.description.setValue(text)
    }
    clickContinueButton() {
        this.continueButton.click()
    }
    clickSubmitButton() {
        this.submitButton.click()
    }

}
export default  new transactionPage()