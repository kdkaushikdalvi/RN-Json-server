import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import _Loader from '../../../components/Loading/_Loading';
import {getSongList} from '../../../service/api';
import styles from './styles';

interface IDetailsListProps {
  route: any;
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

export function ListDetails(props: IDetailsListProps): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [user, setSong] = useState<IParams>(defaultParams);
  const {itemId} = props?.route?.params || 1; // 1 is test id
  useEffect(() => {
    const getSongs = async () => {
      const response = await getSongList(itemId);
      setSong(response.data);
    };
    getSongs();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.postContent}>
          <View style={styles.profile}>
            <Image style={styles.avatar} source={{uri: user.image}} />
          </View>
          <Text style={styles.postTitle}>Song Name : {user.title}</Text>
          <Text style={styles.postDescription}>
            Description : {user.artist}
          </Text>
          <Text style={styles.date}>Duration : {user.duration}</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Text style={styles.shareButtonText}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <_Loader visible={true} />}
    </ScrollView>
  );
}
