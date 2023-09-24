import * as React from 'react';
import './MixFormOrganization.scss';
import { useState } from 'react';
import { Login } from '../../../../../../application/components/Login';
import { FormRegisterOrganization } from '../FormRegisterOrganization';

export const MixFormOrganization: React.FC<{}> = () => {
  const [activeLogin, setActiveLogin] = useState(true);
  const [stateButton, setStateButton] = useState(false);

  const handleFocus = () => {
    setActiveLogin(!activeLogin);
    setStateButton(!stateButton);
  };

  return (
    <div className="mixForms">
      <div className={'focusButton'}>
        <button aria-label={'login-button'} onClick={handleFocus} disabled={!stateButton}>
          Iniciar sesión
        </button>
        <button
          aria-label={'register-button'}
          onClick={handleFocus}
          disabled={stateButton}
        >
          Registrarse
        </button>
      </div>
      {activeLogin ? <Login /> : <FormRegisterOrganization />}
    </div>
  );
};

MixFormOrganization.displayName = 'MixFormOrganization';
