const puppeteer = require('puppeteer');
const Account = require('../models/Account');

class ScrappingService {

  constructor(callback) {
    callback().then((page) => {
      this.page = page;
    }).catch((error) => {
      this.page = null;
    });
  }



  async getDataOfProfile(username) {
    if (this.page == null) return {erorr : "Error fetching data"};


    try {
      await this.page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

      const accountData = await this.page.evaluate(() => {
        const id = document.querySelector('meta[property="al:ios:url"]').getAttribute('content').split('id=')[1];
        const username = document.querySelector('h2').innerText;
        const followers = document.querySelector('ul li:nth-child(2) span').getAttribute('title').replace(/,/g, '');
        const following = document.querySelector('ul li:nth-child(3) span').innerText.replace(/,/g, '');
        const description = document.querySelector('div.-vDIg > span') ? document.querySelector('div.-vDIg > span').innerText : '';
        const isPrivate = document.querySelector('h2') && document.querySelector('h2').innerText === 'This Account is Private';
        const publications = document.querySelector('ul li:nth-child(1) span').innerText.replace(/,/g, '');
        const stories = document.querySelectorAll('canvas[aria-label="User\'s Story"]').length;
        return { id, username, followers, following, description, isPrivate, publications, stories };
      });

      const account = new Account(

        accountData.id,
        accountData.username,
        accountData.followers,
        accountData.following,
        accountData.description,
        accountData.isPrivate,
        accountData.publications,
        accountData.stories
      );

      return account;
    } catch (error) {
      return ({error: 'Error fetching data'});
    }
  }
}

async function login(username, password, browser) {
  if (!browser) return null;
  try {
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', username, { delay: 100 });
    await page.type('input[name="password"]', password, { delay: 100 });
    await page.click('button[type="submit"]');
    return page;
  } catch (error) {
    console.error("Server can't connect to instagram account");
    return null;
  }
}

const scrappingService = new ScrappingService(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await login(process.env.INSTAGRAM_USERNAME, process.env.INSTAGRAM_PASSWORD, browser);
  return page ? page : null;
}
);
module.exports = scrappingService;