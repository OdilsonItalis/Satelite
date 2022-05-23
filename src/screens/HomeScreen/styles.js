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
  },
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
  tempVideo: {
    width: '100%',
    height: 120,
    backgroundColor: '#dbe3f0',
    marginTop: 10,
  },
  skillsTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  skillsRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  skillWrapper: {
    alignItems: 'center',
  },
  skillIconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: '#0a79c8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skillText: {
    fontSize: 12,
  },
  searchBar: {
    width: '100%',
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    marginTop: 15,
    alignItems: 'center',
    overflow: 'hidden',
  },
  searchInput: {
    flex: 1,
    paddingLeft: 25,
  },
  searchIconWrapper: {
    backgroundColor: '#3fa9f5',
    paddingLeft: 20,
    paddingRight: 20,
    height: '100%',
    justifyContent: 'center',
    marginLeft: 7,
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
