import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationNames} from './navigationNames';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

import {
  HomeTabIcon,
  ArchivesTabIcon,
  EditorTabIcon,
  AccountTabIcon,
} from './tabStyleIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const TabNavigationStyle = ({route, focused}) => {
  return (
    <View style={styles.tabsWrapper}>
      {route.name === NavigationNames.HomeTab && (
        <>
          <TouchableOpacity style={styles.tabIcon}>
            <View style={styles.iconWrapper}>
              <HomeTabIcon color={focused ? '#2997de' : '#000'} />
            </View>
            <Text style={{color: focused ? '#2997de' : '#000', fontSize: 10}}>
              Playground
            </Text>
          </TouchableOpacity>
        </>
      )}
      {route.name === NavigationNames.ArchivesTab && (
        <>
          <TouchableOpacity style={styles.tabIcon}>
            <View style={styles.iconWrapper}>
              <ArchivesTabIcon color={focused ? '#2997de' : '#000'} />
            </View>
            <Text style={{color: focused ? '#2997de' : '#000', fontSize: 10}}>
              Archives
            </Text>
          </TouchableOpacity>
        </>
      )}
      {route.name === NavigationNames.PlusTab && (
        <View style={styles.plusTabWrapper}>
          <TouchableOpacity style={styles.tabIcon}>
            <View style={styles.plusTabIconWrapper}>
              <FontAwesomeIcon icon={faPlus} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      )}
      {route.name === NavigationNames.EditorTab && (
        <>
          <TouchableOpacity style={styles.tabIcon}>
            <View style={styles.iconWrapper}>
              <EditorTabIcon color={focused ? '#2997de' : '#000'} />
            </View>
            <Text style={{color: focused ? '#2997de' : '#000', fontSize: 10}}>
              HailyAI Editor
            </Text>
          </TouchableOpacity>
        </>
      )}
      {route.name === NavigationNames.GenerateTab && (
        <>
          <TouchableOpacity style={styles.tabIcon}>
            <View style={styles.iconWrapper}>
              <AccountTabIcon color={focused ? '#2997de' : '#000'} />
            </View>
            <Text style={{color: focused ? '#2997de' : '#000', fontSize: 10}}>
              Account
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 20,
    height: 20,
  },
  iconText: {
    fontSize: 14,
  },
  plusTabWrapper: {
    padding: 3,
    backgroundColor: 'white',
    position: 'absolute',
    top: -45,
    borderRadius: 50,
  },
  plusTabIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#0a79c8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const stackScreenOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: '#FAFAFA',
  },
};
