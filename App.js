import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import MainNavigator from './navigation/Navigator'

function App() {
  return (
    <LinearGradient colors = {['#353544', '#1B1B23']} style = {{flex: 1}}>
    <MainNavigator/>
  </LinearGradient>
  );
}

export default App;
