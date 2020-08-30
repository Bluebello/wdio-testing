import base from '../base'

class InsideNavbar extends  base {
    get transferTab() {
        return $('#transfer_funds_tab')
    }

    clicktransferTab (){
        this.transferTab.waitForExist()
        this.transferTab.click()
    }

} export default new InsideNavbar()