import React, { useState } from 'react';
import styled from 'styled-components';
import { CentHori } from '../../bonds';
import { Play, Pause, Stop, FastForward, Rewind } from '../../atoms/mediabutton';

const Container = styled(CentHori)`
  width: 45%;
  justify-content: space-between;
`;

export const MediaControls = () => {
  const [showPlay, setShowPlay] = useState(true);

  const togglePlay = () => {
    setShowPlay(!showPlay);
  }


  return (
    <Container>
      <Rewind size="36px"/>
      {
        showPlay ? <Play onPress={togglePlay} size="44px" /> : <Pause onPress={togglePlay} size="44px" />
      }
      <FastForward size="36px"/>
    </Container>
  );
};