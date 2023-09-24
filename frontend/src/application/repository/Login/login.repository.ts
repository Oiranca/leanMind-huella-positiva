import { Credential } from '../../../domain/models/Credential/Credential';
import { http } from '../../../infrastructure/http/http';
import { BASE } from '../../../infrastructure/base';
import { ROUTE } from '../../../infrastructure/http/routes';
import { activateAuth } from '../../../infrastructure/http/cookies';
import { profileRepository } from '../../../infrastructure/repositories/Profile.repository';

const login = (credentials: Credential) => {
  http
    .post(`${BASE.API}${ROUTE.API.volunteers.login}`, JSON.stringify(credentials))
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        JSON.stringify(
          response
            .json()
            .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
              activateAuth(res.accessToken, res.refreshToken, res.roles[0]);

              if (res.roles[0] !== 'VOLUNTEER') {
                window.location.replace(`${BASE.URI}${ROUTE.home}`);
              } else {
                profileRepository.profile().then((profile) => {
                  if (
                    profileRepository.isProfileComplete(profile) ||
                    res.roles[0] !== 'VOLUNTEER'
                  ) {
                    window.location.replace(`${BASE.URI}${ROUTE.proposals.list}`);
                  } else {
                    window.location.replace(`${BASE.URI}${ROUTE.volunteers.profile}`);
                  }
                });
              }
            }),
        );
        return 200;
      } else {
        return 403;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginRepository = { login };
