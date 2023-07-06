import {View, Text, Share, Alert} from 'react-native';
import React from 'react';

const ExploreText = () => {
  return (
    <View>
      {/* display Text */}
      <Text
        onPress={() => {
          Alert.alert('heading', 'some description');
        }}>
        Normal Text
      </Text>

      {/* selectable */}
      <Text selectable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        nesciunt.
      </Text>

      {/* selection color */}
      <Text selectable selectionColor="red">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, natus!
      </Text>
    </View>
  );
};

export default ExploreText;
