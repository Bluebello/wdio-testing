import base from '../base'

class exchangePage extends base {
    get currency(){
        return $('#pc_currency')
    }

    get amount(){
        return $('#pc_amount')
    }

    get dolarButton(){
        return $('#pc_inDollars_true')
    }

    get purchaseButton(){
        return $('#purchase_cash')
    }

    get message(){
        return $('#alert_content')
    }


    selectCurrency(attribute, value){
        this.currency.waitForExist()
        this.currency.selectByAttribute(attribute, value)
    }
    fillAmountValue(text){
        this.amount.setValue(text)
    }

    clickDollarButton(){
        this.dolarButton.click()
    }
    clickPurchaseButton(){
        this.purchaseButton.click()
    }

}
export default new exchangePage()