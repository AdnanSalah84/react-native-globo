import React from 'react';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
  HomeRT: {
    screen: Home
  },
  ContactRT: {
    screen: Contact
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