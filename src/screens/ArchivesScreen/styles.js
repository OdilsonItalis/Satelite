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
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
  },
  searchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    marginRight: 10,
    borderColor: '#110f1e',
    borderWidth: 1,
    borderRadius: 4,
    height: 30,
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  contentsContainer: {
    height: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  contentTitleRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#4982a5',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  contentName: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentDate: {
    fontSize: 10,
  },
  rightCountsWrapper: {
    marginLeft: 'auto',
    backgroundColor: '#4579ff',
    padding: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  countNumbers: {
    fontSize: 10,
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
  },
});
