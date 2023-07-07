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
            color: 'white',
            fontSize: 20,
            fontStyle: 'italic',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          News App
        </Text>
        <Text
          style={{marginTop: 10, marginLeft: 10, color: 'white', fontSize: 20}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
          nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis illum, necessitatibus dolorum et quisquam deleniti in
          adipisci. Neque saepe, laudantium corrupti dolorum excepturi sequi
          delectus molestias eligendi vitae beatae, incidunt optio, aut libero
          facilis! Eveniet ad voluptatibus ducimus, mollitia repellat neque
          officiis voluptates quo laboriosam praesentium ipsam rerum, minima
          quaerat illum tempora saepe suscipit quasi nemo voluptatum officia cum
          iure iste. Illo aliquam enim consectetur, nemo impedit facilis fugiat
          veniam sapiente esse sit, adipisci, rerum qui! Minima, magni fuga.
          Architecto id itaque neque quidem reiciendis ea impedit distinctio,
          soluta accusamus repudiandae, voluptates fugiat accusantium corrupti
          at nisi unde eveniet cupiditate.
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
          }}>
          News App
        </Text>
        <Text
          style={{marginTop: 10, marginLeft: 10, color: 'white', fontSize: 20}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi,
          nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Perferendis illum, necessitatibus dolorum et quisquam deleniti in
          adipisci. Neque saepe, laudantium corrupti dolorum excepturi sequi
          delectus molestias eligendi vitae beatae, incidunt optio, aut libero
          facilis! Eveniet ad voluptatibus ducimus, mollitia repellat neque
          officiis voluptates quo laboriosam praesentium ipsam rerum, minima
          quaerat illum tempora saepe suscipit quasi nemo voluptatum officia cum
          iure iste. Illo aliquam enim consectetur, nemo impedit facilis fugiat
          veniam sapiente esse sit, adipisci, rerum qui! Minima, magni fuga.
          Architecto id itaque neque quidem reiciendis ea impedit distinctio,
          soluta accusamus repudiandae, voluptates fugiat accusantium corrupti
          at nisi unde eveniet cupiditate. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Incidunt, nisi. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatem nulla earum rem fugit
          dolore omnis tenetur ipsum quod, eveniet enim quisquam nobis. Quaerat
          blanditiis eum dolor sint. Provident voluptas non tempore inventore
          quas maiores nisi harum consectetur corrupti aspernatur, ducimus, illo
          asperiores ab commodi explicabo earum molestiae vitae nulla
          reiciendis! Iste repudiandae, architecto amet recusandae odio laborum
          ex quo quasi, possimus optio accusantium est sequi reprehenderit at
          fugiat perferendis numquam? Nulla eos saepe, voluptatum aliquid a
          autem ipsum aspernatur quia. Magni voluptatem veritatis fuga laborum
          laboriosam esse illo rerum nesciunt, quod eveniet recusandae culpa
          odit iure quasi, architecto assumenda quia.
        </Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default ExploreBackgroundImage;
