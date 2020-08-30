
import app from '../page-objects/app'
import feedbackPage from "../page-objects/pages/feedbackPage";



describe('E2E - Feedback', () =>{
    it('Should load feedback form', () =>{
        app.feedbackPage()
        feedbackPage.formIsVisible()
    })

    it('Should submit feedback form', () =>{
        feedbackPage.fillForm('Name','test@test.com', 'Subjects', 'Just a message')
        feedbackPage.submitForm()
        // expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
        app.sendFeedbackPage()
    })
})