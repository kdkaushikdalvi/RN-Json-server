import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 30,
    alignItems: 'center',
    backgroundColor: '#00BFFF',
  },
  headerTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    marginTop: 10,
  },
  postContent: {
    flex: 1,
    padding: 30,
  },
  postTitle: {
    fontSize: 26,
    fontWeight: '600',
  },
  postDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  tags: {
    color: '#00BFFF',
    marginTop: 10,
  },
  date: {
    color: '#696969',
    marginTop: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 35,
    borderWidth: 4,
    borderColor: '#00BFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    margin: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    color: '#00BFFF',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 10,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#7DE695',
  },
  shareButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
