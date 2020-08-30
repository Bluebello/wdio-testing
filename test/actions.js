import { short, medium } from  '../lib/timeouts'

describe('Browser Actions', () =>{
    it('Inputs', () =>{
        browser.url("https://devexpress.github.io/testcafe/example/")
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Mike')
        browser.pause(short)
        input.clearValue()
        browser.pause(short)
        input.addValue("Mike")
        browser.pause(short)
    })

    it("Click", () =>{
        const buttonPopulate =$('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        buttonPopulate.doubleClick()
    })

    it('Checkbox and Radio Button', () =>{
        const radio =$('#linux')
        radio.waitForExist()
        radio.click()
        browser.pause(medium)

        const checkbox = $('#remote-testing')
        checkbox.waitForExist()
        checkbox.click()
        browser.pause(medium)

    })

    it('selectbox', () =>{
        const selectBox = $('#preferred-interface')
        selectBox.waitForExist()
        selectBox.selectByVisibleText('JavaScript API')
        browser.pause(medium)
    })
})