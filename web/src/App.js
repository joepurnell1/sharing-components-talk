import React from "react";
import styled from "styled-components";
import "./App.css";
import { MusicPlayer } from "stylish/organisms/musicPlayer";
import {AlbumList} from 'stylish/organisms/albumList';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MusicPlayerContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: row;
  max-width: 800px;
  max-height: 600px;
  padding: 32px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  margin-top: 64px;
  border-radius: 5px;
`;

const ContainerHalve = styled.div`
  flex: 1;
`;

const Scrollable = styled(ContainerHalve)`
  height: 531px;
  overflow-y: auto;
`;

const songList = [
  "The Chase (feat. Kadhja Bonet)",
  "Headlow (feat. Norelle)",
  "Tints (feat. Kendrick Lamar)",
  "Who R U?",
  "Six Summers",
  "Saviers Road",
  "Smile/Petty",
  "Mansa Musa (feat. Dr. Dre and Cocoa Sarai)",
];

function App() {

  const [currentSongTitle, setCurrentSongTitle] = React.useState("Cheers (feat. Q Tip)");
  const [currentArtist, setCurrentArtist] = React.useState("Anderson .Paak");

  const handleSongPress = (songTitle) => {
    const songInfo = songTitle.split(' - ');
    setCurrentSongTitle(songInfo[0])
    setCurrentArtist(songInfo[1]);
  }

  return (
    <Container>
      <MusicPlayerContainer>
        <ContainerHalve>
        <MusicPlayer
          albumArt={require('./assets/oxnard.jpg')}
          songTitle={currentSongTitle}
          artist={currentArtist}
        />
        </ContainerHalve>
        <Scrollable>
          <AlbumList
            albumArt={require('./assets/oxnard.jpg')}
            songList={songList}
            artist="Anderson .Paak"
            onSongPress={handleSongPress}
          />
        </Scrollable>
      </MusicPlayerContainer>
    </Container>
  );
}

export default App;
