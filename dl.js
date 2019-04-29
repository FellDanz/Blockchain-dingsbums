'use strict';
var fs = require('fs');
var md5 = require('md5');

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

var hash;
var date = new Date();
var timestamp = Math.round((new Date()).getTime() / 1000).toString();

(async() => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.nytimes.com/');
  await page.screenshot({path: 'full.png', fullPage: true});
  await browser.close();

  fs.readFile('full.png', function(err, buf) {
    //console.log(md5(buf));
     hash = buf;
  });

  var output = timestamp.concat("_",hash);

})();
