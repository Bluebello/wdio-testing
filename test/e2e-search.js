import app from '../page-objects/app'
import navbar from "../page-objects/components/navbar";
import resultPage from  '../page-objects/pages/resultPage'




describe('e2e Test - search', () =>{
    it('Should load homepage', () =>{
    app.openHomePage()
    })


    it('Should  submit searchBox', () =>{
        navbar.search('bank')
        const resultTitle = resultPage.resultsTitle
        resultPage.resultsIsVisible()
        expect(resultTitle).toHaveText('Search Results:')

    })
})