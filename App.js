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
import ExploreModal from './works/Modal/ExploreModal';
import ExploreBackgroundImage from './works/backgroundImage/ExploreBackgroundImage';

const App = () => {
  return (
    <>
      {/* <ExploreText /> */}
      {/* <ExploreTextInput /> */}
      {/* <ExploreImage /> */}
      {/* <ExploreScrollView /> */}
      {/* <ExploreShare /> */}
      {/* <ExploreAlert /> */}
      {/* <ExploreButtons /> */}
      <ExploreModal />
      {/* <ExploreBackgroundImage /> */}
    </>
  );
};

export default App;
