import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

const ErrorScreen = () => {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/logo.png')}
      />
    </View>
  );
};

export default ErrorScreen;
