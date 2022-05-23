import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 14,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wordCount: {
    fontSize: 12,
  },
  avatarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  avaName: {
    fontSize: 12,
  },
});
