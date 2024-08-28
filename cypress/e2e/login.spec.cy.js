// Import the LoginPage class
import { LoginPage } from "./pages/loginPage";

describe('Login Test', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('No username and password entered', () => {
    loginPage.submit();
    loginPage.verifyUsernameLoginFailure();
  });

  it('invalid username', () => {
    loginPage.login('wrongusername', 'SuperSecretPassword!');
    loginPage.verifyUsernameLoginFailure();
  });

  it('invalid password', () => {
    loginPage.login('tomsmith', 'wrongpassword');
    loginPage.verifyPasswordLoginFailure();
  });

  it('login successful', () => {
    loginPage.login('tomsmith', 'SuperSecretPassword!');
    loginPage.verifyLoginSuccess();
  });
});