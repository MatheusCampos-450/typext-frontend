import React, { useCallback, useState } from 'react';
import { message } from 'antd';

import { useAuth } from 'contexts/auth';

import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Logo from 'assets/logo.svg';

import { useParams } from 'react-router-dom';
import ResetPasswordModal from './components/ResetPasswordModal';
import StyledNewPassword from './styles';

export interface ParamsData {
  email: string;
}

const NewPassword = () => {
  const params: ParamsData = useParams();

  const { resetPassword } = useAuth();

  const [showResetModal, setShowResetModal] = useState<boolean>(false);

  const [userPassword, setUserPassword] = useState<string>('');
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>('');

  const handleCloseResetModal = useCallback(() => {
    setShowResetModal(false);
  }, []);

  const handleResetPassword = useCallback(() => {
    const userEmail = params.email;

    if (!userPassword || !userConfirmPassword) {
      message.error('Todos os campos devem estar preenchidos');
      return;
    }

    setShowResetModal(true);
    resetPassword({
      email: userEmail,
      password: userPassword,
      password_confirmation: userConfirmPassword,
    });
  }, [resetPassword, params, userPassword, userConfirmPassword]);

  return (
    <>
      {showResetModal && <ResetPasswordModal onClose={handleCloseResetModal} />}

      <StyledNewPassword>
        <img src={Logo} alt="Logo Typext" />

        <div className="NewPassword">
          <Input
            title="Inserir nova senha"
            color="var(--black)"
            styleWidth="41.875rem"
            Type="text"
            onChange={event => setUserPassword(event.target.value)}
          />

          <Input
            title="Confirme nova senha"
            color="var(--black)"
            styleWidth="41.875rem"
            Type="text"
            onChange={event => setUserConfirmPassword(event.target.value)}
          />

          <Button color="var(--green)" onClick={handleResetPassword}>
            Atualizar
          </Button>
        </div>
      </StyledNewPassword>
    </>
  );
};

export default NewPassword;
