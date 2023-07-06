import {View, Text, Share} from 'react-native';
import React from 'react';

const ExploreShare = () => {
  return (
    <View>
      {/* Share Option */}
      <Text
        onPress={() => {
          Share.share({message: 'Share message'});
        }}>
        Share It
      </Text>
    </View>
  );
};

export default ExploreShare;
