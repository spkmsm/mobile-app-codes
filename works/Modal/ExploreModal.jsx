/* eslint-disable react-native/no-inline-styles */
import {View, Text, Modal, Button, ImageBackground} from 'react-native';
import React, {useState} from 'react';

const ExploreModal = () => {
  const [show, hide] = useState(false);
  return (
    // <View
    //   style={{
    //     width: '100%',
    //     height: '100%',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#fffff',
    //   }}>
    //   <Modal visible={show} transparent={true} animationType="slide">
    //     <View
    //       style={{
    //         width: '100%',
    //         height: '100%',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         backgroundColor: '#fffff',
    //       }}>
    //       <View style={{width: 100, height: 100, backgroundColor: 'green'}}>
    //         <Text>This is Modal</Text>
    //         <Button
    //           title="Close Modal"
    //           onPress={() => {
    //             hide(!show);
    //           }}
    //         />
    //       </View>
    //     </View>
    //   </Modal>
    //   <Button
    //     title="Open Modal"
    //     onPress={() => {
    //       hide(!show);
    //     }}
    //   />
    //   <ImageBackground
    //     style={{flex: 1}}
    //     source={{
    //       uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
    //     }}
    //   />
    // </View>
    <ImageBackground
      style={{flex: 1}}
      resizeMode="cover"
      source={{
        uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      }}>
      <Text>hello</Text>
    </ImageBackground>
  );
};

export default ExploreModal;
