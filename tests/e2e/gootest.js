module.exports = {
  'Test jquery is loaded' : function (browser) {
    browser
      .url('http://localhost:8080/index.html')
      .waitForElementVisible('body', 1000)
      .assert.containsText('#foo', 'Jquery work')
      .end();
  }
};