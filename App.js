/* eslint-disable react-native/no-inline-styles */
import {View, Text, Share, ScrollView} from 'react-native';
import React from 'react';
import ExploreText from './works/Text/ExploreText';
import ExploreTextInput from './works/TextInput/ExploreTextInput';
import ExploreImage from './works/Image/ExploreImage';
import ExploreScrollView from './works/ScrollView/ExploreScrollView';
import ExploreShare from './works/Share/ExploreShare';
import ExploreAlert from './works/Alert/ExploreAlert';
import ExploreButtons from './works/Button/ExploreButtons';

const App = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={{flexDirection: 'column'}}>
        <ExploreText />
        <ExploreTextInput />
        <ExploreImage />
        <ExploreScrollView />
        <ExploreShare />
        <ExploreAlert />
        <ExploreButtons />
      </View>
    </ScrollView>
  );
};

export default App;
