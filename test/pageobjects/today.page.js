import Page from './page.js'

class TodayPage extends Page {

    get todayLabel() { return $('.simple_content') }

}

export default new TodayPage()