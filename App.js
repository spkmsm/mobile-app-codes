/* eslint-disable react-native/no-inline-styles */
import {View, Text, Share} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      {/* <Icon name="music" size={100} /> */}
      <AntDesign
        name="sharealt"
        size={50}
        color="green"
        onPress={() => {
          Share.share({message: '9876543210'});
        }}
      />
    </View>
  );
};

export default App;
