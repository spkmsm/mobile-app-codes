/* eslint-disable react-native/no-inline-styles */
import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

const ExploreBackgroundImage = () => {
  return (
    <ScrollView style={{width: '100%', height: '100%'}}>
      <ImageBackground
        style={{width: '100%', minHeight: '50%'}}
        resizeMode="cover"
        source={{
          uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        }}>
        <Text
          style={{
            color: 'red',
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          News App
        </Text>
        <Text
          style={{marginTop: 10, marginLeft: 10, color: 'red', fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae neque
          dolorum aperiam praesentium similique blanditiis iure nam animi
          accusamus corporis.
        </Text>
      </ImageBackground>
      <ImageBackground
        style={{width: '100%', maxHeight: '50%'}}
        resizeMode="cover"
        source={{
          uri: 'https://res.cloudinary.com/jerrick/image/upload/v1613318166/60294816e5abae001c5260be.jpg',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'Times',
          }}>
          my mobile application awesome project
        </Text>
        <Text
          style={{marginTop: 10, marginLeft: 10, color: 'red', fontSize: 20}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          debitis.
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default ExploreBackgroundImage;
