import React from 'react';
import {
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Notes,
  S,
  Slide,
  Text,
  Layout,
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';
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
  alright: require('./assets/alright.gif'),
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
          {/* <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Software Engineer - OVO Energy
          </Heading> */}
          <Notes>
            <p>talk will focus on two things...</p>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} fit caps lineHeight={1} textColor="secondary">
            Atomic Design
          </Heading>
          <Heading size={3} fit lineHeight={1} textColor="tertiary">
            (that Brad Frost design system thingy)
          </Heading>
          <Notes>
            <p>atomic design</p>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            Share UI code
          </Heading>
          <Heading size={3} fit caps lineHeight={1} textColor="primary">
            across platforms
          </Heading>
          <Notes>
            <p>how we can use it to share ui code between web and mobile platforms</p>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Atomic Design
          </Heading>
          <Heading size={5} textColor="primary" caps>
            Brad Frost
          </Heading>
          <Text size={6} textColor="primary" margin="30px auto 0">
            https://bradfrost.com/blog/post/atomic-web-design/#templates
          </Text>
          <Notes>
            <p>start with atomic design</p>
            <ul>
              <li>design methodology</li>
              <li>brad frost</li>
              <li>breaks design into 5 levels</li>
              <li>checkout his blog for a deeper dive</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading size={6} textColor="tertiary" caps fit>
            Atomic Design
          </Heading>
          <Image
            src={images.atomicDesign.replace("/", "")}
            margin="0px auto 40px"
          />
          <Notes>
            <ul>
              <li>look at general structure</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>low level element</li>
              <li>usually dumb</li>
              <li>but reuseable</li>
              <li>define structure via props</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>multiple atoms</li>
              <li>no data fetching</li>
              <li>larger portion of the screen</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>multiple molecules</li>
              <li>a fully ledged page component</li>
              <li>still no data fetching</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>all about the data</li>
              <li>template uses placeholders</li>
              <li>pages are real use injecting data</li>
              <li>not digging much deeper</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>assuming two things</li>
              <li>you love react</li>
              <li>you love styled components</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1}>
            💅
          </Heading>
          <Heading size={1} fit caps textColor="quaternary">
            Yes, there are
          </Heading>
          <Heading size={1} fit caps textColor="quaternary">
            other libraries
          </Heading>
          <Heading size={1} fit caps textColor="secondary">
            (but I like it lot)
          </Heading>
          <Notes>
            <ul>
              <li>there is a reasons for styled-components</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Also, there is a need for styled-components
          </Heading>
          <Notes>
            <ul>
              <li>we'll come to it later</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>look at component structure</li>
              <li>
                <p>make web change</p>
                <ul>
                  <li>Blur image: filter: blur(20px);</li>
                  <li>yarn build stylish</li>
                  <li>rm -rf node_modules/stylish ; yarn add /Users/joepurnell/Development/pres/comp-lib/stylish/lib</li>
                  <li>yarn start</li>
                </ul>
              </li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Image
            src={images.shrug.replace("/", "")}
            margin="40px auto 0"
            height="200px"
          />
          <Notes>
            <ul>
              <li>big woop right?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" caps fit>
            covalent bonds
          </Heading>
          <Heading size={6} textColor="secondary" caps fit>
            holding molecules together
          </Heading>
          <Notes>
            <ul>
              <li>or molecular bond</li>
              <li>bonds that hold different atoms together</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>black magic</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading size={6} textColor="secondary" caps fit>
            using webpack
          </Heading>
          <Heading size={6} textColor="secondary" caps fit>
            just webpack
          </Heading>
          <Heading size={6} textColor="quaternary" caps fit>
            <S type="strikethrough">fancy webpack configuration</S>
          </Heading>
          <Heading size={6} textColor="tertiary" caps fit>
            normal normal webpack
          </Heading>
          <Notes>
            <ul>
              <li>no fancy configuration</li>
            </ul>
          </Notes>
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
          <Notes>
            <ul>
              <li>filetype from React Native</li>
              <li>both platforms</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="quaternary" align="center center">
          <Heading size={6} textColor="primary" fit>
            index.ios.js
          </Heading>
          <Heading size={6} textColor="primary" fit margin="100px 0 -50px 0">
            index.android.js
          </Heading>
          <Notes>
            <ul>
              <li>focused to one platform</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps textColor="primary">
            back to styled-components
          </Heading>
          <Notes>
            <ul>
              <li>back to styled components</li>
              <li>using it with atomic structure</li>
            </ul>
          </Notes>
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

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={2} textColor="quaternary">
            index.js
          </Heading>
          <CodePane
            lang="jsx"
            source={`export const VerticalConatiner = styled.div\`\n\tdisplay: flex;\n\tflex-direction: column;\n\`;\n`}
            margin="20px 0"
            textSize="24px"
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
           <Notes>
            <ul>
              <li>importing from atoms</li>
              <li>extending the styles</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary">
          <Heading size={2} textColor="primary">
            Webpack checks for our platform and loads the appropriate file extension at each level
          </Heading>
          <Notes>
            <ul>
              <li>each layer webpack searches and uses the right file</li>
              <li>mobile order of importance</li>
            </ul>
          </Notes>
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
          <Notes>
            <ol>
              <li>uncomment in .vscode</li>
              <li>show atomic journey</li>
              <li>show running</li>
              <li>change component</li>
              <li>
                <p>redeploy</p>
                <ul>
                  <li>yarn build stylish</li>
                  <li>rm -rf node_modules/stylish ; yarn add /Users/joepurnell/Development/pres/comp-lib/stylish/lib</li>
                  <li>yarn start</li>
                  <li>yarn run ios</li>
                </ul>
              </li>
            </ol>
          </Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary">
          <Heading size={2} textColor="primary" fit caps margin="0 0 20px">
            Styled Components = Share more of your styling across platforms
          </Heading>
          <Heading size={2} textColor="primary" fit caps margin="0 0 20px">
            Web Pack = Black magic (super handy getting file types though)
          </Heading>
          <Heading size={2} textColor="primary" fit caps margin="0 0 20px">
            Atomic Design = Great at breaking down components into reusable chunks
          </Heading>
          <Heading size={2} textColor="primary" fit caps margin="0 0 20px">
            Share code = By defining all levels of your component separately
          </Heading>
          <Heading size={2} textColor="primary" fit caps>
            Modules = Easy peasy sharing across projects
          </Heading>
          <Notes>look at the slide numb nuts</Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" align="center center">
          <Image
            src={images.alright.replace("/", "")}
            margin="40px auto 40px"
            height="300px"
          />
          <Heading size={2} caps textColor="primary">
            questions?
          </Heading>
          <Notes>Any questions?</Notes>
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary">
          <Text size={2} textColor="primary">
            https://github.com/joepurnell1/comp-lib-talk
          </Text>
          <Notes>find repo</Notes>
        </Slide>

      </Deck>
    );
  }
}
