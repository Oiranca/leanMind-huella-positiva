import { http } from '../../../infrastructure/http/http';
import { ROUTE } from '../../../infrastructure/http/routes';
import { BASE } from '../../../infrastructure/base';
import { Credential } from '../../../domain/models/Credential/Credential';
import { loginRepository } from './login.repository';

describe('LoginRepository', () => {
  let spyFunction: jest.SpyInstance;

  beforeEach(() => {
    spyFunction = jest.spyOn(http, 'post');
  });

  afterEach(() => {
    spyFunction.mockRestore();
  });

  it('should try to login with an http post', () => {
    const credentials: Credential = {
      email: 'example@example.com',
      password: 'example',
    };

    loginRepository.login(credentials);

    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.login}`,
      JSON.stringify(credentials),
    );
  });
});
