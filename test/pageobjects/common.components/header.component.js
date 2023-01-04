import Page from '../page.js'

class Header extends Page {

    get profileButton() { return $('button.settings_btn') }
    get logOutButton()  { return $('(//div[contains(@class, " user_menu")]/button)[2]') }

    async logout() {
        await this.profileButton.click()
        await this.logOutButton.click()
    }

}

export default new Header()