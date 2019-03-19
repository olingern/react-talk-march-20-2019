// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  Appear
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

const images = {
  goodWork: require('../assets/good-work.gif'),
  stairs: require('../assets/stairs.jpg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Should I use Redux, the Context API, or both?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Me
          </Heading>

          <Text size={6} textColor="secondary">
            @olingern
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            This presentation, brought to you by React
          </Heading>
          <br />
          <Text size={5} textColor="primary">
            Shoutout to FormidableLabs for Spectacle
          </Text>
          <Text size={8} textColor="primary" style={{ fontSize: 20}}>
            https://github.com/FormidableLabs/spectacle
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            What are we talking about?
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Some relevant reading and listening
          </Heading>
          
          <Text size={8} textColor="primary" style={{ fontSize: 20, marginTop: 40 }}>

            <b>James K Nelson</b> <br/>
            https://frontarm.com/james-k-nelson/when-context-replaces-redux/
          </Text>
            <Text size={8} textColor="primary" style={{ fontSize: 20, marginTop: 40 }}>
            <b>
            S05E01 Modern Web Podcast - State Management
            </b>
            <br/>
            https://www.youtube.com/watch?v=kyJKDtQUb7w
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} textColor="secondary">
            What passing props sometimes feels like ... 
          </Heading>
          <Image src={images.stairs} width={500} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            State buffet
          </Heading>
          <List>
            <Appear><ListItem>Good ole' props</ListItem></Appear>
            <Appear><ListItem>Redux</ListItem></Appear>
            <Appear><ListItem>Context API</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            Questions I like to ask myself when choosing where to store state
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What is the context and breadth of the application?
          </Heading>

          <List style={{marginLeft: '45px'}}>
            <Appear><ListItem>Is it for a limited context within a larger application?</ListItem></Appear>
            <Appear><ListItem>Does the state have usage across many different components?</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What is the nature of the state?
          </Heading>
          <List>
            <Appear><ListItem>Presentational</ListItem></Appear>
            <Appear><ListItem>Application</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary">
            What Mari Kondo ( 近藤麻理恵 ) can teach us about state 
          </Heading>
          <List>
            <Appear><ListItem>Simplicity and decluttering</ListItem></Appear>
            <Appear><ListItem>Having a place for everything</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
