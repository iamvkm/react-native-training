import {StyleSheet} from 'react-native';

const landingScreenStyles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 125,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '700',
    color: 'green',
  },
  descriptionText: {
    marginTop: 20,
    fontWeight: '500',
    fontSize: 16,
  },
  codeInput: {
    width: 150,
    fontSize: 25,
    color: 'green',
    borderWidth: 2,
    fontWeight: '700',
    textAlign: 'center',
    borderColor: 'green',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 50,
  },
});

export default landingScreenStyles;