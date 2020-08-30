import base from '../base'

class payNavbar extends base{
    get payment() {
        return $('#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a')
    }

    get purchaseForeignCurrency(){
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    clickPay() {
        this.payment.click()
    }

    clickPurchaseForeignCurrencyCash(){
        this.purchaseForeignCurrency.waitForExist()
        this.purchaseForeignCurrency.click()
    }
}
export default new payNavbar()