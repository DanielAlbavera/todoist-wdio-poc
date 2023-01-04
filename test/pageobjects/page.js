import { URLS } from '../data/constants.js'

export default class Page {
    
    open (path) {
        return browser.url(`${URLS.BASE}/${path}`)
    }
    
    open () {
        return browser.url(`${URLS.BASE}`)
    }

    async maximizeWIndow()  {
       await browser.maximizeWindow()
    }

}
