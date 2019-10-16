// Import React
import React from 'react';
import { Play } from 'stylish/atoms/mediabutton';
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';
import './codeStyle.css';

require('normalize.css');

const theme = createTheme(
  {
    primary: '#02182B',
    secondary: '#E84855',
    tertiary: '#FFF',
    quaternary: '#16F4D0',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const images = {
  atomicDesign: require('./assets/atomic-design.png'),
  atom: require('./assets/PlayButton.png'),
  molecule: require('./assets/MusicControls.png'),
  organism: require('./assets/MusicPlayer.png'),
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        transitionDuration={500}
        theme={theme}
        progress="none"
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Atomic Development
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            I'm Joe 🙋‍♂️
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Digital Support Experience
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Atomic Design
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
            (that Brad Frost design system methodology)
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Share UI code
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            across platforms
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Atomic Design
          </Heading>
          <Heading size={6} textColor="primary" caps>
            Brad Frost
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center center">
          <Heading size={6} textColor="tertiary" caps fit>
            Atomic Design
          </Heading>
          <Image src={images.atomicDesign.replace('/', '')} margin="0px auto 40px" />
        </Slide>

        <Slide transition={['fade']} bgColor="quaternary" align="center center">
          <Heading size={3} textColor="primary" caps lineHeight={1}>
            Atoms
          </Heading>
          <Image src={images.atom.replace('/', '')} margin="40px auto 0" height="200px" />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" align="center center">
          <Heading size={3} textColor="tertiary" caps lineHeight={1}>
            Molecules
          </Heading>
          <Image src={images.molecule.replace('/', '')} margin="40px auto 0" height="200px" />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" align="center center">
          <Heading size={3} textColor="tertiary" caps lineHeight={1}>
            Organisms
          </Heading>
          <Image src={images.organism.replace('/', '')} margin="40px auto 0" height="200px" />
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" align="center center">
          <Layout>
            <Fill>
              <Heading size={3} textColor="primary" caps lineHeight={1}>
                Templates
              </Heading>
            </Fill>
            <Fill>
              <Heading size={3} textColor="primary" caps lineHeight={1}>
                Pages
              </Heading>
            </Fill>
          </Layout>
        </Slide>

        <CodeSlide
            transition={[]}
            bgColor="tertiary"
            lang="js"
            code={require("./assets/code/atom.example").default} // eslint-disable-line
            ranges={[
              { loc: [5, 8], title: 'Second' },
              { loc: [0, 1], title: 'The Beginning' },
            ]}
          />

      </Deck>
    );
  }
}
