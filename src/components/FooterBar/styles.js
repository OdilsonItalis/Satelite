import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  footerBar: {
    width: '100%',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    backgroundColor: '#111a29',
    borderRadius: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  tempChart: {
    backgroundColor: '#26395a',
    width: 50,
    height: 50,
  },
  graphTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'white',
    marginRight: 'auto',
  },
  spliter: {
    position: 'absolute',
    height: 25,
    borderLeftColor: 'white',
    borderLeftWidth: 1,
  },
  paysTitle: {
    fontSize: 16,
    color: 'white',
  },
  comission: {
    fontSize: 12,
    color: 'white',
  },
  comissionCount: {
    color: '#8cc580',
  },
});
