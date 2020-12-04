import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';

import {ImageService} from '../@services/image.service';

const HomePage = () => {
  const [images, setImages] = useState<[]>([]);
  useEffect(() => {
    loadImages();
  }, []);
  const loadImages = () => {
    try {
      ImageService.filterPhotos({page: '16'}).subscribe(
        (res: any) => {
          setImages(res?.data);
        },
        (error: any) => console.log('error', error),
      );
    } catch (error) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
