import LoginPage from '../pageobjects/login.page.js'
import LandingPage from '../pageobjects/landing.page.js'
import { CREDENTIALS } from '../data/constants.js'

describe('Invalid Login Validations', () => {
    
    beforeEach( async () => {
        await LandingPage.open()
        await LandingPage.maximizeWIndow()
        await LandingPage.clickOnLoginButton()
    })

    it('should not login without email', async () => {
        const expected_text = 'Introduce una dirección de email válida.'
        await LoginPage.submitButton.click()
        await expect(LoginPage.missingCredentialsMessage).toBeDisplayed()
        expect(await LoginPage.missingCredentialsMessage).toHaveText(expected_text)
    })

    it('should not login without password', async () => {
        const expected_text = 'Las contraseñas deben tener al menos 8 caracteres.'
        await LoginPage.inputEmail.setValue(process.env.INVALID_EMAIL)
        await LoginPage.submitButton.click()
        await expect(LoginPage.missingCredentialsMessage).toBeDisplayed()
        expect(await LoginPage.missingCredentialsMessage).toHaveText(expected_text)
    })

    it('should not login with invalid credentials', async () => {
        const expected_text = 'Email o contraseña incorrectos.'
        await LoginPage.login(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.INVALID_USER.PASSWORD)
        await expect(LoginPage.errorMessage).toBeDisplayed()
        expect(await LoginPage.errorMessage).toHaveText(expected_text)
    })

})

