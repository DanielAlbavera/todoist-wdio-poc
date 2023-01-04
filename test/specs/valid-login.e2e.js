import LandingPage from '../pageobjects/landing.page.js'
import LoginPage from '../pageobjects/login.page.js'
import TodayPage from '../pageobjects/today.page.js'
import Header from '../pageobjects/common.components/header.component.js'
import SignupPage from '../pageobjects/signup.page.js'
import { CREDENTIALS } from '../data/constants.js'

describe('Valid Login Validations', () => {
    
    beforeEach( async () => {
        await LandingPage.open()
        await LandingPage.maximizeWIndow()
    })

    afterEach( async () => {
        await Header.logout()
    })

    it('should login with valid credentials by "Login" Button', async () => {
        await LandingPage.clickOnLoginButton()
        await loginAndValidate()
    })

    it('should login with valid credentials by "Header sign up" Button', async () => {
        await LandingPage.clickOnHeaderSignUpButton()
        await SignupPage.clickOnLogInLink()
        await loginAndValidate()
    })

    it('should login with valid credentials by "Top sign up" Button', async () => {
        await LandingPage.clickOnTopSignUpButton()
        await SignupPage.clickOnLogInLink()
        await loginAndValidate()
    })

    it('should login with valid credentials by "Bottom sign up" Button', async () => {
        await LandingPage.clickOnBottomSignUpButton()
        await SignupPage.clickOnLogInLink()
        await loginAndValidate()
    })

    async function loginAndValidate() {
        await LoginPage.login(CREDENTIALS.STANDARD_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)
        expect(await TodayPage.todayLabel).toBeExisting()
    }

})


