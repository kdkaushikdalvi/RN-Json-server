import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import _Loader from '../../../components/Loading/_Loading';
import {addSone} from '../../../service/api';
import styles from './styles';
import {Text} from '@ui-kitten/components';

interface ISongListProps {
  navigation: any;
}

export function SongList(props: ISongListProps): JSX.Element {
  const [songTitle, setSongTitle] = useState('');
  const [artistName, setArtist] = useState('');
  const [loading, setLoading] = useState(false);

  const newSong = async () => {
    setLoading(true);
    const newSong = {
      title: songTitle,
      artist: artistName,
      duration: DEFAULT_DURATION,
      image: DEFAULT_IMAGE,
    };
    await addSone(newSong);
    setTimeout(() => {
      setLoading(false);
      props.navigation.goBack();
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior="padding"
      enabled>
      <View>
        <View style={styles.phoneWrapper}>
          <View>
            <Text style={styles.inputText}>Enter Song Name</Text>
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
            <Text style={styles.inputText}>Enter Song Description</Text>
          </View>
          <TextInput
            data-name="description"
            style={styles.textInputStyle}
            placeholder="Song Description"
            placeholderTextColor="gray"
            onChangeText={e => setArtist(e)}
            value={artistName}
          />
        </View>
        <View style={styles.borderBottom} />
        <View style={styles.borderBottomLine} />
        <TouchableOpacity
          style={styles.signButton}
          onPress={() => {
            newSong();
          }}>
          <Text style={styles.signBtn}>Add</Text>
        </TouchableOpacity>
        <View></View>
      </View>
      {loading && <_Loader visible={true} />}
    </KeyboardAvoidingView>
  );
}

export const DEFAULT_IMAGE = 'https://www.bensound.com/bensound-img/sunny.jpg';
export const DEFAULT_DURATION = '10:20';
