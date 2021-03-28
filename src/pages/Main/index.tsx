import React, { useState } from 'react';
import Initial from './components/Initial/Initial';
import ProjectInformation from './components/ProjectInformation/ProjectInformation';
import OptionButtons from './components/OptionButtons';
import Topics from './components/Topics/Topics';
import Subjects from './components/Subjects/Subjects';
import Distributions from './components/Distributions/Distributions';

// eslint-disable-next-line
import MinuteViewer from './components/MinuteViewer';

import Container from './styles';

import {
  IProjectInfo,
  ISubject,
  ITopic,
  IAddressAndHour,
  IMinute,
} from './components/MinuteViewer/components/Minute/DTOs';

const Main = () => {
  const [showMinute, setShowMinute] = useState(false);

  const [minute, setMinute] = useState<IMinute>();
  const [addressAndHour, setAddressAndHour] = useState<IAddressAndHour>({
    local: '',
    startDate: '',
    startHour: '',
  });
  const [projectInfo, setProjectInfo] = useState<IProjectInfo>({
    projectName: '',
    members: [],
  });

  const [topics, setTopics] = useState<ITopic[]>([]);
  const [subjects, setSubjects] = useState<ISubject[]>([]);
  const [distributions, setDistributions] = useState<string[]>([]);

  const handleGenerateMinute = () => {
    setMinute({
      addressAndHour,
      projectInfo,
      topics,
      subjects,
      distributions,
    });
  };

  return (
    <>
      {showMinute && <MinuteViewer setShowMinute={setShowMinute} minute={minute} />}

      <Container>
        <Initial setAddressAndHour={setAddressAndHour} />
        <ProjectInformation setProjectInfo={setProjectInfo} />
        <Topics setTopics={setTopics} topics={topics} />

        <Subjects subjects={subjects} setSubjects={setSubjects} />
        <Distributions
          setDistributions={setDistributions}
          distributions={distributions}
        />
        <OptionButtons
          setShowMinute={setShowMinute}
          handleGenerateMinute={handleGenerateMinute}
        />
      </Container>
    </>
  );
};

export default Main;
