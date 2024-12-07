exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.text_username = page.getByLabel('Username')
        this.text_password = page.getByLabel('Password')
        this.button_login = page.getByRole('button', { name: ' Login' })
    }

    async goToWebSite() {
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(userName, password) {
        await this.text_username.fill(userName)
        await this.text_password.fill(password)
        await this.button_login.click()
    }
}