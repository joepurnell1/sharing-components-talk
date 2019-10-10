import React from 'react';
import styled from 'styled-components/native';
import { StatusBar} from 'react-native';
import {MusicPlayer} from 'stylish/organisms/musicPlayer';
import {AlbumList} from 'stylish/organisms/albumList';

const View = styled.SafeAreaView`
  background-color: #f9f9f9;
  flex: 1;
`;

const StyledScrollView = styled.ScrollView`
  padding-top: 16px;
`;

const songList = [
  'The Chase (feat. Kadhja Bonet)',
  'Headlow (feat. Norelle)',
  'Tints (feat. Kendrick Lamar)',
  'Who R U?',
  'Six Summers',
  'Saviers Road',
  'Smile/Petty',
  'Mansa Musa (feat. Dr. Dre and Cocoa Sarai)',
  'Brother’s Keeper (feat. Pusha T)',
  'Anywhere (feat. Snoop Dogg, The Last Artful, Dodgr)',
  'Trippy (feat. J. Cole)',
  'Cheers (feat. Q Tip)',
  'Sweet Chick (feat. BJ The Chicago Kid – Bonus Track)',
  'Left to Right',
];

const App: () => React$Node = () => {

  const [currentSongTitle, setCurrentSongTitle] = React.useState("Cheers (feat. Q Tip)");
  const [currentArtist, setCurrentArtist] = React.useState("Anderson .Paak");

  const handleSongPress = (songTitle) => {
    const songInfo = songTitle.split(' - ');
    setCurrentSongTitle(songInfo[0])
    setCurrentArtist(songInfo[1]);
  }

  return (
    <View>
    <StatusBar barStyle="dark-content" />
      <MusicPlayer
        albumArt={require('./assets/oxnard.jpg')}
        songTitle={currentSongTitle}
        artist={currentArtist}
      />
      <StyledScrollView>
        <AlbumList
          albumArt={require('./assets/oxnard.jpg')}
          songList={songList}
          artist="Anderson .Paak"
          onSongPress={handleSongPress}
        />
      </StyledScrollView>
    </View>
  );
};

export default App;
