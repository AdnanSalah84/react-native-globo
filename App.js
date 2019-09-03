import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { Video } from './app/views/Video';
import { VideoDetail } from './app/views/VideoDetail';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
  },
  LessonsRT: {
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
}, {
    initialRouteName: 'HomeRT'
  }
);


const App = createAppContainer(MyRoutes);


export default App;

/*export default function App() {
  return (
    // <Home />
    <MyRoutes />

  );
}*/