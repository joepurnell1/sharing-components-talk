import React from 'react';
import styled from 'styled-components';
import { CentVert } from '../../bonds';
import { Image } from '../../atoms/image';
import { Title } from '../../atoms/typography';
import { MediaControls } from '../../molecules/mediacontrols';
import stringShortener from '../../utils/stringShortener';

const Container = styled(CentVert)`
  align-self: center;
  padding: 32px 0;
  width: 100%
`;

const SongTitle = styled(Title)`
  font-size: 16px;
  padding: 24px 4px;
  width: 80%;
  text-align: center;
`;

export const MusicPlayer = ({ albumArt, songTitle, artist }) => (
  <Container backgroundColor="white" shadow radius="5px">
    <Image source={albumArt} width="80%" radius="5px" shadow />
    <SongTitle>{stringShortener(`${songTitle} - ${artist}`, 32)}</SongTitle>
    <MediaControls />
  </Container>
);