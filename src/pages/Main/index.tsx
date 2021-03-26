import React, { useState } from 'react';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';

import Container from './styles';

import MinuteViewer from './components/MinuteViewer';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} />}

      <Container>
        <Initial />
        <ProjectInformation />
        <OptionButtons setShowMinute={setShowMinute} />
      </Container>
    </>
  );
};

export default Main;
