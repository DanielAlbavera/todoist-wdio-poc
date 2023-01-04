import Page from './page.js'

class SignUpPage extends Page {

    get logInLink () { return $('a[href="/auth/login"]') }
    
    async clickOnLogInLink() { await this.logInLink.click() }

}

export default new SignUpPage()