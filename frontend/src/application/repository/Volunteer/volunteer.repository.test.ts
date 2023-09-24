import { http } from '../../../infrastructure/http/http';
import { ROUTE } from '../../../infrastructure/http/routes';
import { BASE } from '../../../infrastructure/base';
import { Credential } from '../../../domain/models/Credential/Credential';
import { volunteerRepository } from './volunteer.repository';

describe('volunteerRepository', () => {
  let spyFunction: jest.SpyInstance;

  beforeEach(() => {
    spyFunction = jest.spyOn(http, 'post');
  });

  afterEach(() => {
    spyFunction.mockRestore();
  });

  it('should try to register with an http post', () => {
    const credentials: Credential = {
      email: 'example@example.com',
      password: 'example',
    };

    volunteerRepository.register(credentials);

    expect(spyFunction).toBeCalledWith(
      `${BASE.API}${ROUTE.API.volunteers.register}`,
      JSON.stringify(credentials),
    );
  });
});
