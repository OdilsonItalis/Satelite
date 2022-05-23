import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backgroundImage: {
    width: '150%',
    height: 500,
    position: 'absolute',
    top: -150,
    left: -150,
    opacity: 0.2,
  },
  mainContainer: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
  },
  tempVideo: {
    width: '100%',
    height: 150,
    backgroundColor: '#dbe3f0',
    marginTop: 10,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  lamp: {
    width: 30,
    height: 30,
  },
  title: {
    color: '#447bfc',
    fontSize: 26,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#473739',
    marginTop: 15,
  },
});
