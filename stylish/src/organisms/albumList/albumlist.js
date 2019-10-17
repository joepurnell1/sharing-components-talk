import React from 'react';
import styled from 'styled-components'
import { Vert } from '../../bonds';
import { Title } from '../../atoms/typography';
import { SongListing } from '../../molecules/songlisting';

const Container = styled(Vert)`
  align-items: flex-start;
  margin-top: -16px;
`;

const Text = styled(Title)`
  text-align: center;
  font-size: 12px;
  color: #686666;
  width: 100%;
  padding: 16px 0;
`;

export const AlbumList = ({ albumArt, songList = [], artist, onSongPress }) => {
  return (
    <Container>
      {
        songList.map(songTitle => <SongListing key={songTitle} imageSrc={albumArt} songTitle={`${songTitle} - ${artist}`} onPress={onSongPress} />)
      }
      <Text>no more songs in album</Text>
    </Container>
  );
}