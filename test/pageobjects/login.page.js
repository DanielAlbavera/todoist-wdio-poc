import Page from './page.js'

class LoginPage extends Page {
    get inputEmail ()                { return $('input[type="email"]') }
    get inputPassword ()             { return $('input[type="password"]') }
    get submitButton ()              { return $('button[data-gtm-id="start-email-login"]') }
    get missingCredentialsMessage () { return $('//form/div/p') }
    get errorMessage ()              { return $('(//form/div)[1]') }

    async login (email, password) {
        await this.inputEmail.setValue(email)
        await this.inputPassword.setValue(password)
        await this.submitButton.click()
    }

    open () {
        return super.open('/auth/login')
    }
}

export default new LoginPage()
