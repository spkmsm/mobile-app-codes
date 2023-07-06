/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const ExploreScrollView = () => {
  return (
    <View>
      {/* vertical Scrolling */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/112-1122103_mango-png-free-download-individual-fruits-and-vegetables.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/518-5181906_peach-png-image-download-individual-white-background-fruits.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://www.seekpng.com/png/detail/8-82590_apple-png-individual-fruits-and-vegetables.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://pngimg.com/d/orange_PNG752.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/518-5181906_peach-png-image-download-individual-white-background-fruits.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA0EhwuVOYFYJeccpgeY2kgE5kRdtwWh1aZA&usqp=CAU',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />

          <Image
            source={{
              uri: 'https://www.pngitem.com/pimgs/m/518-5181906_peach-png-image-download-individual-white-background-fruits.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
          <Image
            source={{
              uri: 'https://png.pngitem.com/pimgs/s/21-214359_tomatoes-png-single-fruits-and-vegetables-transparent-png.png',
            }}
            width={50}
            height={50}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScrollView;
