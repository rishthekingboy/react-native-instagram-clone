import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Story from '../../components/Story';

const Home = () => {
  return (
    <View>
      <View style={styles.stories}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={{flexGrow: 1}}
          style={{width: '100%', height: '100%'}}>
          {[...Array(10)].map((_, i) => (
            <View
              key={i}
              style={
                i === 9
                  ? {...styles.storyContainer, marginRight: 10}
                  : styles.storyContainer
              }>
              <Story />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  stories: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },

  storyContainer: {
    paddingBottom: 10,
    marginLeft: 10,
  },
});
