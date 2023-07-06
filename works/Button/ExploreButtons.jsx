/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button, Alert, Share, TouchableOpacity} from 'react-native';
import React from 'react';

const ExploreButtons = () => {
  return (
    <View>
      {/* sample Button */}
      <Text>Sample Buttom</Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <Button
          title="Click Here"
          color="red"
          style={{width: 100, height: 10}}
        />
        <Button
          title="Click Here"
          color="red"
          style={{width: 100, height: 10}}
        />
      </View>
      <Button title="Click Here" color="rgb(255,100,100)" />
      <Button title="Click Here" color="#AFF" />

      <Button title="Click Here" color="rgba(255,100,100,0.5)" />
      <TouchableOpacity
        style={{
          width: 100,
          backgroundColor: 'rgb(200,200,100)',
          padding: 20,
          borderRadius: 10,
        }}>
        <Text>click here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExploreButtons;
