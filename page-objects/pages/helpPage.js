import base from '../base'

class helpPage extends base {
    get title () {
        return $('.span8 > h3')
    }

    get transferLink () {
        return $('*=transfer funds')
    }

    get payBillsLink() {
        return $('*=pay bills')
    }

    clickOnTransferLink() {
        this.transferLink.waitForExist()
        this.transferLink.click()

    }
    clickOnPayBillLink(){
        this.payBillsLink.waitForExist()
        this.payBillsLink.click()
    }

} export default new helpPage()