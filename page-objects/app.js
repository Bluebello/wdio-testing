
class app {
    openHomePage() {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    openLoginPage() {
        browser.url('http://zero.webappsecurity.com/login.html')

    }

    feedbackPage() {
        browser.url('http://zero.webappsecurity.com/feedback.html')
    }
    sendFeedbackPage() {
        browser.url('http://zero.webappsecurity.com/sendFeedback.html')
    }

    logout() {
        browser.url('http://zero.webappsecurity.com/logout.html')
    }

}

export default new app()