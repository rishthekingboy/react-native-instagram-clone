import {StyleSheet, Text, View, Image} from 'react-native';

import React from 'react';

const Story = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/img/bg-illus.jpg')}
          style={styles.thumbnail}
        />
      </View>
      <Text>Story</Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 90,
    display: 'flex',
    alignItems: 'center',
  },

  imgContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
