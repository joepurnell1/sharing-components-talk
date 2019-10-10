import React from "react";
import styled from "styled-components";
import { Hori } from "../../atoms/layout";
import { ClearButton } from "../../atoms/button";
import { Image } from "../../atoms/image";
import { Title } from "../../atoms/typography";
import stringShortener from '../../utils/stringShortener';

const Container = styled(Hori)`
  width: 100%;
  background-color: white;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);

  padding: 4px;
  border-radius: 5px;
  align-items: center;
`;

const SongTitle = styled(Title)`
  margin-left: 8px;
`;

export const SongListing = ({ imageSrc, songTitle, onPress }) => {

  const handlePress = () => {
    onPress(songTitle);
  }

  return (
    <ClearButton margin="16px 32px 0 32px;" width="80%" onPress={handlePress}>
      <Container>
        {imageSrc && <Image source={imageSrc} height="48px" width="48px" />}
        <SongTitle>{stringShortener(`${songTitle}`, 30)}</SongTitle>
      </Container>
    </ClearButton>
  );
};
