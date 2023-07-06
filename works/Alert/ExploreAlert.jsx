import {View, Text, Alert} from 'react-native';
import React from 'react';

const ExploreAlert = () => {
  return (
    <View>
      {/* Alert Option */}
      <Text
        onPress={() => {
          Alert.alert('Heading', 'Description');
        }}>
        ExploreAlert
      </Text>
    </View>
  );
};

export default ExploreAlert;
