const { describe } = require("mocha");

describe('Login', () => {
    it('should successfully log into our app', () => {
      cy.request({
        url: "https://iam.bc.dev.americommerce.cloud/oauth/token",
        method: 'POST',
        body: {
          lient_id: "GOnMpnfHmnYIDAOVFP7LvaX8JmItPXk3",
          code: "Upi9IFD7yNyV0jVN",
          code_verifier: "kwSFJacccfOy9kV_xFkF8Ggi8IkqwNeKAsi1u2H~ZGM",
          grant_type: "authorization_code",
          redirect_uri: "https://bc.dev.americommerce.cloud"
        }
      }).then(res => cy.log(res))
      // cy.login().then((resp) => {
  
      // });
    });
  });