import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

const AppHeader = () => {
  return (
    <View style={styles.headRow}>
      <View>
        <Text style={styles.greeting}>Good Afternoon</Text>
        <Text style={styles.name}>Avery Davis</Text>
        <Text style={styles.wordCount}>Word count: 18, 578</Text>
      </View>
      <View style={styles.avatarWrapper}>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/avatar.jpg')}
        />
        <Text style={styles.avaName}>HailyAI Settings</Text>
      </View>
    </View>
  );
};

export default AppHeader;
