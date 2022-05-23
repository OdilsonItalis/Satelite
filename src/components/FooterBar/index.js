import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

const FooterBar = () => {
  return (
    <View style={styles.footerBar}>
      <View style={styles.tempChart} />
      <Text style={styles.graphTitle}>
        Authorized
        {'\n'}
        Reseller
      </Text>
      <View style={styles.spliter} />
      <View>
        <Text style={styles.paysTitle}>Pays Residuals</Text>
        <Text style={styles.comission}>
          <Text style={styles.comissionCount}>30%</Text> Comission
        </Text>
      </View>
    </View>
  );
};

export default FooterBar;
