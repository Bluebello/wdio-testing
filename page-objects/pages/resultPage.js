import base from '../base'

class resultPage extends base {

    get resultsTitle () {
        return $('h2')
    }


    resultsIsVisible() {
        this.resultsTitle.waitForExist()
    }




} export default new resultPage()