/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput} from 'react-native';
import React from 'react';

const ExploreTextInput = () => {
  return (
    <View>
      {/* full border */}
      <Text>Full Border</Text>
      <TextInput style={{borderWidth: 1}} />

      {/* border bottom */}
      <Text>Bottom Border</Text>
      <TextInput style={{borderBottomWidth: 1}} />

      {/* border color */}
      <Text>Bottom color</Text>
      <TextInput style={{borderWidth: 1, borderColor: 'green'}} />

      {/* border bottom color */}
      <Text>Bottom Border Color</Text>
      <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'red'}} />

      {/* TextInput with placeholder */}
      <Text>TextInput with placeholder</Text>
      <TextInput
        style={{borderWidth: 1, borderColor: 'orange'}}
        placeholder="Enter Name Here"
      />

      {/* TextInput bottom border with placeholder */}
      <Text>TextInput bottom border with placeholder</Text>
      <TextInput
        style={{borderBottomWidth: 1, borderColor: 'orange'}}
        placeholder="Enter Name Here"
      />
    </View>
  );
};

export default ExploreTextInput;
