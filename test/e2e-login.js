import loginPage from '../page-objects/pages/loginPage'
import app from '../page-objects/app'
import navbar from '../page-objects/components/navbar'

describe('E2e Tests - login/Logout Flow', () =>{
    it('Should not login with invalid credentials', () =>{
    // browser.url('http://zero.webappsecurity.com/index.html')
        app.openHomePage()
        const button = $('#signin_button')
        button.waitForExist()
        // $('#signin_button').waitForExist()
        // $('#signin_button').click()
        navbar.clickSignIn()
        loginPage.pauseShort()
        // $('#login_form').waitForExist()
        // $('#user_login').setValue('invalid')
        // $('#user_password').setValue('invalid')
        // $('input[type="submit"]').click()
        loginPage.formIsVisible()
        loginPage.fillForm('invalid username', 'invalid password')
        loginPage.submitForm()

        const message = loginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')

    })

    it("Should login with valid credentails", () =>{
        // browser.url('http://zero.webappsecurity.com/index.html')
        app.openHomePage()
        // $('#signin_button').waitForExist()
        // $('#signin_button').click()
        navbar.clickSignIn()
        // $('#login_form').waitForExist()
        // $('#user_login').setValue('username')
        // $('#user_password').setValue('password')
        // $('input[type="submit"]').click()
        loginPage.formIsVisible()
        loginPage.fillForm('username', 'password')
        loginPage.submitForm()
        navbar.insiteNavbarIsVisible()


    })

    it('Should logout from app', () =>{
        // $('.icon-user').waitForExist()
        // $('.icon-user').click()
        // $('#logout_link').waitForExist()
        // $('#logout_link').click()
        app.logout()
        // $('#pages-nav').waitForExist()
        navbar.signInButtonIsVisible()
    })

})