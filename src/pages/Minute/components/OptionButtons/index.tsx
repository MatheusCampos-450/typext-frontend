import React, { useCallback } from 'react';

import Button from 'components/Button/Button';

import { getMode } from 'services/api';

import { Container } from './styles';

interface OptionButtonsProps {
  setShowMinute: Function;
  setShowSchedule: Function;
  handleGenerateMinute: Function;
}

const OptionButtons: React.FC<OptionButtonsProps> = ({
  setShowMinute,
  setShowSchedule,
  handleGenerateMinute,
}: OptionButtonsProps) => {
  const isNotProduction = getMode();

  const handleOpenMinuteModal = useCallback(() => {
    if (handleGenerateMinute) handleGenerateMinute(true);
    if (setShowMinute) setShowMinute(true);
  }, [setShowMinute, handleGenerateMinute]);

  const handleOpenSchedule = useCallback(() => {
    if (setShowSchedule) setShowSchedule(true);
  }, [setShowSchedule]);

  return (
    <Container>
      <div className="buttons">
        <Button color="#CECFD0">Voltar</Button>
        <Button color="#373435" onClick={handleOpenSchedule}>
          Agendar
        </Button>
        <Button color="var(--red-pink)" onClick={handleOpenMinuteModal}>
          Visualizar Ata
        </Button>
        {isNotProduction && <Button color="#0AAD74">Gerar Ata</Button>}
      </div>
    </Container>
  );
};
export default OptionButtons;
