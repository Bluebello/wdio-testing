import { short, medium, long } from '../lib/timeouts';
import { mobile, tablet, desktop} from "../lib/devices";



describe('First Steps', () => {
    it("Load Example Website", () => {
        browser.url('http://www.example.com')
        browser.pause(short)
        expect(browser).toHaveUrl('http://www.example.com/')
        expect(browser).toHaveTitle('Example Domain')
    })

    it('H1 should be visible', () => {
        //    Get selector and save it to variable
        const h1 = $('h1')
        h1.waitForExist()
        // Do assertion
        expect(h1).toBeVisible()
    })
    it("p should be visible", () => {
        const p = $("div > p")
        p.waitForExist()
        expect(p).toBeVisible()
    })

    it('check link value', () => {
        const link = $('a')

        expect(link).toHaveLink('https://www.iana.org/domains/example')
    })
    it("Get Element Text", () => {
        //znajdowanie tekstu
        const text = $('h1').getText()
        //sprawdzanie textu
        const element = $("h1")
        element.waitForExist()
        expect(element).toHaveText("Example Domain")

    })

    it('Assert Attribute', () => {
        browser.url("https://devexpress.github.io/testcafe/example/")
        browser.pause(medium)
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')


    })

    it('Assert Value', () =>{
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it("Save Screenshot", () => {
        browser.saveScreenshot('image.png')
    })

    it('change browser viewpoint', () =>{
        browser.setWindowSize(800, 600)
        browser.pause(long)
    })

    it('Set Mobile View', () =>{
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)

    })

    it("Set Tablet View", () =>{
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(medium)

    })

    it('Set Desktop View', () =>{
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(long)

    })
})


