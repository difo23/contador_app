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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: '#FF6464',
    padding: 10,
    marginBottom: 30,
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
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
  post: {
    backgroundColor: '#EDF7FA',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 60,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
