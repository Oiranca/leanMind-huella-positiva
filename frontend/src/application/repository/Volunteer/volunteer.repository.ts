import { VolunteerCredentialsDTO } from '../../../infrastructure/http/dtos/CredentialsDTO';
import { http } from '../../../infrastructure/http/http';
import { ROUTE } from '../../../infrastructure/http/routes';
import { BASE } from '../../../infrastructure/base';
import { activateAuth } from '../../../infrastructure/http/cookies';

const register = (registerCredentials: VolunteerCredentialsDTO) => {
  http
    .post(
      `${BASE.API}${ROUTE.API.volunteers.register}`,
      JSON.stringify(registerCredentials),
    )
    .then((response) => {
      if (response.status === 201 || response.status === 200) {
        response
          .json()
          .then((res: { accessToken: string; refreshToken: string; roles: string }) => {
            activateAuth(res.accessToken, res.refreshToken, res.roles[0]);
          });
        window.location.replace(`${BASE.URI}${ROUTE.email.confirmation}`);
      } else if (response.status === 409) {
        return 409;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const volunteerRepository = {
  register,
};
