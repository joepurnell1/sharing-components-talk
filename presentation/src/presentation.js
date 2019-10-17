// Import React
import React from 'react';
import { Play } from 'stylish/atoms/mediabutton';
import {
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  S,
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
  shrug: require('./assets/shrug.gif'),
  webpack: require('./assets/webpack.jpg'),
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Atomic Development
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            I'm Joe 🙋‍♂️
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Digital Support Experience
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Atomic Design
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
            (that Brad Frost design system methodology)
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Share UI code
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            across platforms
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Atomic Design
          </Heading>
          <Heading size={6} textColor="primary" caps>
            Brad Frost
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading size={6} textColor="tertiary" caps fit>
            Atomic Design
          </Heading>
          <Image
            src={images.atomicDesign.replace("/", "")}
            margin="0px auto 40px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={3} textColor="primary" caps lineHeight={1}>
            Atoms
          </Heading>
          <Image
            src={images.atom.replace("/", "")}
            margin="40px auto 0"
            height="200px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" align="center center">
          <Heading size={3} textColor="tertiary" caps lineHeight={1}>
            Molecules
          </Heading>
          <Image
            src={images.molecule.replace("/", "")}
            margin="40px auto 0"
            height="200px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading size={3} textColor="tertiary" caps lineHeight={1}>
            Organisms
          </Heading>
          <Image
            src={images.organism.replace("/", "")}
            margin="40px auto 0"
            height="200px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" align="center center">
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

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Show the code!
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            WARNING
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
              <Fill>
                <Heading size={1}>
                  💅
                </Heading>
              </Fill>
              <Fill>
                <Heading size={1}>
                  ⚛︎
                </Heading>
              </Fill>
            </Layout>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1}>
            💅
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            Not the best tech
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            (but I like it lot)
          </Heading>
          <Heading size={1} fit caps textColor="quaternary">
            Yes, there are
          </Heading>
          <Heading size={1} fit caps textColor="quaternary">
            other libraries
          </Heading>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            But there is need for styled-components
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="primary">
            code!
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Image
            src={images.shrug.replace("/", "")}
            margin="40px auto 0"
            height="200px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" caps fit>
            covalent bonds
          </Heading>
          <Heading size={6} textColor="secondary" caps fit>
            holding molecules together
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`export const VerticalConatiner = styled.div\`\n\tdisplay: flex;\n\tflex-direction: column;\n\`;\n`}
            margin="20px 0"
            textSize="24px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" align="center center">
          <Image
            src={images.atomicDesign.replace("/", "")}
            margin="40px auto 0"
            height="300px"
            width="auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" align="center center">
          <Image
            src={images.webpack.replace("/", "")}
            margin="40px auto 0"
            height="500px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading size={6} textColor="quaternary" caps fit>
            <S type="strikethrough">fancy webpack configuration</S>
          </Heading>
          <Heading size={6} textColor="secondary" caps fit>
            using webpack
          </Heading>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" fit>
            index.js
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" fit>
            index.native.js
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" fit>
            index.ios.js
          </Heading>
          <Heading size={6} textColor="primary" fit margin="100px 0 -50px 0">
            index.android.js
          </Heading>
        </Slide>


        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={`import styled from 'styled-components';`}
            margin="20px 0"
            textSize="30px"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <CodePane
            lang="jsx"
            source={`import styled from 'styled-components/native';`}
            margin="20px 0"
            textSize="30px"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary">
          <Heading size={2} textColor="primary">
            index.native.js
          </Heading>
          <CodePane
            lang="jsx"
            source={`import styled from 'styled-components/native';\n\nexport const VerticalConatiner = styled.View\`\n\tflex-direction: column;\n\`;\n`}
            margin="20px 0"
            textSize="24px"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={2} textColor="primary">
            index.js
          </Heading>
          <CodePane
            lang="jsx"
            source={`import React from 'react';\nimport styled from 'styled-components';\nimport { VerticalContainer } from 'component-library/atoms';\nimport { Text } from 'component-library/atoms';\n\nconst Container = styled(VerticalContainer)\`\n  background-color: #BADA55;\n\`;\n\nexport default () => (\n  <Container>\n    <Text>Fancy Component</Text>\n  </Container>\n);\n`}
            margin="20px 0"
            textSize="24px"
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            code!
          </Heading>
        </Slide>

      </Deck>
    );
  }
}
