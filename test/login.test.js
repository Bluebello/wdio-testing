import * as dataHelper from "../lib/data-helpers"


describe('E2e Tests - login/Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        browser.waitAndClick('#signin_button')
        browser.wait('#login_form')

        browser.waitAndText('#user_login', 'invalid')
        browser.waitAndText('#user_password', 'invalid')
        browser.waitAndClick('input[type="submit"]')

        const message = $('.alert-error')
        expect(message).toHaveText('Login and/or password are wrong.')

    })
    it('Should not login with  credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        browser.waitAndClick('#signin_button')
        browser.wait('#login_form')
        browser.waitAndText('#user_login', 'username')
        browser.waitAndText('#user_password', 'password')
        browser.waitAndClick('input[type="submit"]')
        // $('.nav-tabs').waitForExist()
        browser.wait('.nav-tabs')
    })

    it('Should logout from app', () =>{
        browser.waitAndClick('.icon-user')
        browser.waitAndClick('#logout_link')
        // $('#pages-nav').waitForExist()
        browser.wait('#pages-nav')

    })
})

