import {StyleSheet} from 'react-native';

export const appStyles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  profile: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileTitle: {
    paddingTop: 30,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileDescription: {
    padding: 25,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
});
