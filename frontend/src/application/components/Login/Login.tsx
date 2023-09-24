import React, { useCallback, useEffect, useState } from 'react';
import { Credential } from '../../../domain/models/Credential/Credential';
import { SubmitButton } from '../Buttons/SubmitButton';
import { FieldForm } from '../Forms/FieldForm';
import { LoginService } from '../../../domain/services/Login/login.service';

export const Login: React.FC<{}> = () => {
  const [stateButton, setStateButton] = useState(true);
  const [messageShow, setMessageShow] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleStateButton = useCallback(() => {
    data.email !== '' && data.password !== ''
      ? setStateButton(false)
      : setStateButton(true);
  }, [data.email, data.password]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const credential: Credential = {
      email: data.email,
      password: data.password,
    };
    LoginService.login(credential);
  }

  useEffect(() => {
    handleStateButton();
  }, [data, handleStateButton]);

  return (
    <form className="ContainerForm" method="POST" id="form" onSubmit={handleSubmit}>
      <FieldForm
        title={'Email'}
        type={'email'}
        name={'email'}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <FieldForm
        title={'Contraseña'}
        type={'password'}
        name={'password'}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      {messageShow && (
        <p style={{ color: 'red', marginTop: '5px' }}>El email o contraseña están mal</p>
      )}
      <SubmitButton text={'Acceder'} disabled={stateButton} />
    </form>
  );
};

Login.displayName = 'Login';
