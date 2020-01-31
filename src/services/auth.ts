
class Auth {

  private email?: string
  private authenticated: boolean = false

  constructor() {
    this.email = localStorage.getItem('email') || undefined
    if (this.email) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
  }

  get isAuthenticated() {
    return this.authenticated
  }

  get user() {
    return {
      email: this.email,
    }
  }

  async login(email: string, password: string) {
    if (email) {
      this.email = email
      this.authenticated = true
    } else {
      this.email = undefined
      this.authenticated = false
    }
  }

  async signout() {
    this.authenticated = false
    this.email = undefined
  }
}

const auth = new Auth()
export default auth