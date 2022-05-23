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
    height: '100%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 20,
  },
  contentRow: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  descriptionContainer: {
    height: '100%',
    width: '60%',
  },
  countsWrapper: {
    width: '100%',
    height: 50,
    backgroundColor: '#4579ff',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countNumbers: {
    fontSize: 12,
    color: 'white',
    marginLeft: 5,
    marginRight: 8,
  },
  descriptionTextContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  descriptionText: {
    fontSize: 12,
    color: '#37393f',
  },
  recommendationContainer: {
    flex: 1,
    alignItems: 'center',
  },
  actionButton: {
    width: 120,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#4679ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 2,
  },
  recommendationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  infoItemRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 7,
  },
  infoTextWrapper: {
    marginLeft: 5,
  },
  recommendItemTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#363d43',
  },
  recommendItemDesc: {
    fontSize: 10,
    color: '#363d43',
    lineHeight: 10,
  },
  checkRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
  },
  checkIcon: {
    marginRight: 10,
  },
  imageRow: {
    width: '100%',
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 40,
    height: 40,
  },
  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
