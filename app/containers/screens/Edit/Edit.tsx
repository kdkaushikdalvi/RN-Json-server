import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import _Loader from '../../../components/Loading/_Loading';
import {getSongList, editSong} from '../../../service/api';
import styles from './styles';

interface IEditSong {
  route: any;
  navigation: any;
}

interface IParams {
  id: string;
  title: string;
  artist: string;
  duration: string;
  image: string;
}

const defaultParams = {
  id: '',
  title: '',
  artist: '',
  duration: '',
  image: '',
};

export function EditSong(props: IEditSong): JSX.Element {
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtist] = useState('');
  const [loading, setLoading] = useState(false);
  const [songs, setSong] = useState<IParams>(defaultParams);
  const {itemId} = props?.route?.params || 1; // test id

  useEffect(() => {
    const getSongs = async () => {
      const response = await getSongList(itemId);
      setSong(response.data);
      setSongTitle(response.data.title);
      setArtist(response.data.artist);
    };
    getSongs();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const updateSong = async () => {
    const editObj = {
      ...songs,
      title: songTitle,
      artist: artistName,
    };
    await editSong(itemId, editObj);
    props.navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior="padding"
      enabled>
      <View>
        <View style={styles.phoneWrapper}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={{uri: songs.image}} />
          </View>
          <View>
            <Text style={styles.inputText}>Song Name</Text>
          </View>
          <TextInput
            data-name="name"
            style={styles.textInputStyle}
            placeholder="Song Name"
            placeholderTextColor="gray"
            onChangeText={e => setSongTitle(e)}
            value={songTitle}
          />
        </View>
        <View style={styles.phoneWrapper}>
          <View>
            <Text style={styles.inputText}>Song Description</Text>
          </View>
          <TextInput
            data-name="description"
            style={styles.textInputStyle}
            placeholder="Song Description"
            placeholderTextColor="gray"
            onChangeText={e => setArtist(e)}
            value={artistName}
            multiline={true}
          />
        </View>
        <View style={styles.borderBottom} />
        <View style={styles.borderBottomLine} />
        <TouchableOpacity
          style={styles.signButton}
          onPress={() => {
            updateSong();
          }}>
          <Text style={styles.signBtn}>Update</Text>
        </TouchableOpacity>
        <View></View>
      </View>
      {loading && <_Loader visible={true} />}
    </KeyboardAvoidingView>
  );
}

EditSong.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.number,
  }).isRequired,
};
