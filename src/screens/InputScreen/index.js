import React from 'react';
import {View, Text, Image} from 'react-native';
import AppHeader from '../../components/AppHeader';
import FooterBar from '../../components/FooterBar';

import {styles} from './styles';

const InputScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
      <View style={styles.mainContainer}>
        <AppHeader />
        <View style={styles.tempVideo} />
        <View style={styles.titleWrapper}>
          <Image
            style={styles.lamp}
            source={require('../../assets/images/lamp.png')}
          />
          <Text style={styles.title}>Developer Notes</Text>
        </View>
        <Text style={styles.description}>
          Please provide context for the ideas you would to brainstorm with
          HailyAI. Use the format "keyword-1, keyword-2". Keyword-1 should be
          broader, like an entire niche, while Keyword-2 should be narrower,
          like a single type of product.
          {'\n'}
          {'\n'}
          The "Default" and "Nonfiction" modes prime HailyAI to be factual and
          realistic, while "Fiction" is more fanciful. Examples:
          {'\n'}
          T-Shirts, Tie Dye
          {'\n'}
          Investing, Real Estate
          {'\n'}
          E-Commerce, Grooming
          {'\n'}
          Magical Weapons, Swards
          {'\n'}
          Space, Psychic Powers
        </Text>
        <FooterBar />
      </View>
    </View>
  );
};

export default InputScreen;
