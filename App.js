import React from 'react';
import { Home } from './app/views/Home';

export default function App() {
  return (
    // <Home />
    <div>
      <View>
        <Text>This will be the Homepage</Text>
        <Text>These other lines are here</Text>
        <Text>So you can see the text in the app</Text>
        <Header message='Press to Login' />
      </View>
    </div>
  );
}