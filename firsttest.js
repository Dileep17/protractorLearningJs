
describe("Super Calculator", function(){

    it("Should have a title", function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual("Super Calculator");
    })

    it("Should two numbers", async function(){
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await element(by.model('first')).sendKeys(1);
        await element(by.model('second')).sendKeys(2);
        await element(by.id('gobutton')).click();
        await expect(element(by.binding('latest')).getText()).toEqual('3'); 
    })

})


// var protractor_1 = require("protractor"); 
// console.log(Object.getOwnPropertyNames('protractor_1'))