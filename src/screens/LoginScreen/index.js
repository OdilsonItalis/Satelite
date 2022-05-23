import React from 'react';
import {View, Image, Text, TextInput, CheckBox} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {NavigationNames} from '../../navigations/navigationNames';

import {styles} from './styles';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoImage}
        source={require('../../assets/images/logo.png')}
      />
      <Text style={styles.title}>Satellite Writer</Text>
      <Text style={styles.description}>Sign in to continue</Text>

      <View style={styles.loginContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput style={styles.inputForm} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Password</Text>
          <TextInput
            style={styles.inputForm}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.forgotRow}>
          <View style={styles.checkboxWrapper}>
            <CheckBox />
            <Text style={styles.rememberMe}>Remember me</Text>
          </View>
          <Text style={styles.forgotPassword}>Forgot password</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavigationNames.RootTabContainer)}>
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.socialBtnsRow}>
          <TouchableOpacity>
            <Image
              style={styles.facebookIcon}
              source={require('../../assets/images/facebook.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.googleIcon}
              source={require('../../assets/images/google.png')}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpText}>
          Don't have account?{' '}
          <Text style={styles.signUpNew}>Create a new account</Text>
        </Text>
      </View>
      <Text style={styles.power}>Powered by HailyAI</Text>
      <Text style={styles.terms}>Terms | Privacy</Text>

      {/* <View style={styles.registerArea}>
        <Text style={styles.registerText}>Don't you have account?</Text>
        <View style={styles.registerButtonArea}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NavigationNames.RegisterScreen)}>
            <Text style={styles.registerButton}>Register</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}> to create account.</Text>
        </View>
      </View> */}
    </View>
  );
};

export default LoginScreen;
TouchableOpacity;
