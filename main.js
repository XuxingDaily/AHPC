const puppeteer = require("puppeteer");

const url = "https://yqtb.gzhu.edu.cn/infoplus/form/XNYQSB/start";
const account = {
    "un": "",
    "pwd": ""
}

async function ahpc(url, un, pwd) {
    console.log("开始打卡...");
    const browser = await puppeteer.launch({
        executablePath: './node_modules/puppeteer/.local-chromium/win64-1022525/chrome-win/chrome.exe'
    });
    const page = await browser.newPage();
    // 打开登录界面
    await page.goto(url);
    await page.waitForXPath('//*[@id="un"]');

    // 输入账号
    const un_element = (await page.$x('//*[@id="un"]'))[0];
    await un_element.click();
    await un_element.type(un);

    // 输入密码
    const pwd_element = (await page.$x('//*[@id="pd"]'))[0];
    await pwd_element.click();
    await pwd_element.type(pwd);

    // 进入网页
    const login_btn = (await page.$x('//*[@id="index_login_btn"]'))[0];
    await login_btn.click();

    // 申报
    await page.waitForTimeout(20000);
    const preview_start_btn = (await page.$x('//*[@id="preview_start_button"]'))[0];
    await preview_start_btn.click();

    // 填表
    await page.waitForTimeout(10000);
    const isContact_radio = (await page.$x('//*[@id="V1_CTRL46"]'))[0];
    await isContact_radio.click();

    const isGreenQRCode_radio = (await page.$x('//*[@id="V1_CTRL262"]'))[0];
    await isGreenQRCode_radio.click();

    const isToAffectedArea_radio = (await page.$x('//*[@id="V1_CTRL37"]'))[0];
    await isToAffectedArea_radio.click();

    const isToGoOut_radio = (await page.$x('//*[@id="V1_CTRL238"]'))[0];
    await isToGoOut_radio.click();
    
    const checkbox = (await page.$x('//*[@id="V1_CTRL82"]'))[0];
    await checkbox.click();
    
    // 提交
    const command_btn_content = (await page.$x('//*[@id="form_command_bar"]/li[1]'))[0];
    await command_btn_content.click();

    await page.waitForTimeout(3000);
    await browser.close();
    await console.log("成功打卡！");
}

(main = () => {
    ahpc(url, account.un, account.pwd);
})();