import Page from './page.js'

class LandingPage extends Page {

    get loginButton()         { return $('//a[@href="/auth/login"]')  }
    get headerSignUpButton () { return $('(//a[@href="/auth/signup"])[2]') }
    get topSignUpButton ()    { return $('(//a[@href="/auth/signup"])[3]') }
    get bottomSignUpButton () { return $('(//a[@href="/auth/signup"])[2]') }

    async clickOnLoginButton()          { await this.loginButton.click()        }
    async clickOnHeaderSignUpButton()   { await this.headerSignUpButton.click() }
    async clickOnTopSignUpButton()      { await this.topSignUpButton.click()    }
    async clickOnBottomSignUpButton()   { await this.bottomSignUpButton.click() }

}

export default new LandingPage()