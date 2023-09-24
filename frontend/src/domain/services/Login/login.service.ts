import { Credential } from '../../models/Credential/Credential';
import { loginRepository } from '../../../application/repository/Login/login.repository';

const login = (credential: Credential) => {
  loginRepository.login(credential);
};

export const LoginService = { login };
