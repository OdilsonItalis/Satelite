import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a0f6',
    paddingLeft: 30,
    paddingRight: 30,
  },
  logoImage: {
    width: 200,
    height: 160,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 1.2,
    marginTop: 0,
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  loginContainer: {
    width: '100%',
    borderRadius: 16,
    padding: 30,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  inputContainer: {
    width: '100%',
    paddingBottom: 15,
  },
  labelText: {
    width: '100%',
    fontSize: 12,
    textAlign: 'left',
    color: '#000',
    marginBottom: 4,
  },
  inputForm: {
    width: '100%',
    height: 40,
    fontSize: 16,
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
  forgotRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#9c8aee',
  },
  loginButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0795ff',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialBtnsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  facebookIcon: {
    width: 40,
    height: 40,
    marginRight: 30,
  },
  googleIcon: {
    width: 40,
    height: 40,
  },
  signUpText: {
    marginTop: 10,
    textAlign: 'center',
  },
  signUpNew: {
    color: '#9c8aee',
  },
  power: {
    color: '#fff',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 16,
  },
  terms: {
    marginTop: 5,
    color: '#fff',
    fontSize: 15,
  },
});
