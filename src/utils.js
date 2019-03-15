class Utils {
  constructor() {
    this.oauth2AuthEndpoint = 'http://localhost:8080/auth/realms/checkit/protocol/openid-connect/auth';
    this.oauth2ClientId = 'checkit-office';
  }

  getLoginUrl(params) {
    return `${this.oauth2AuthEndpoint}?client_id=${this.oauth2ClientId}&redirect_uri=${params.protocol}//${params.host}/signin&response_type=code`;
  }
  getLogoutUrl(params) {
    return `${this.oauth2LogoutEndpoint}?redirect_uri=${params.protocol}//${params.host}:${params.port}/signin?loggedOut`;
  }
}

export default Utils;