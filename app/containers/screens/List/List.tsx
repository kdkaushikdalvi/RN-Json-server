import React, {useState, useEffect, useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {getSongList, deleteSong} from '../../../service/api';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  FlatList,
} from 'react-native';
import _Loader from '../../../components/Loading/_Loading';
import {Images} from '../../../assets/images/map.js';

interface ISongList {
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

interface EnumServiceItems extends Array<IParams> {}

const defaultParams = {
  id: '',
  title: '',
  artist: '',
  duration: '',
  image: '',
};

export function SongList(props: ISongList): JSX.Element {
  const [loading, setLoading] = useState(true);
  const [songs, setSong] = useState<EnumServiceItems>([]);
  const flatList = useRef();

  const moveToTop = () => {
    if (songs.length > 1) {
      flatList.current.scrollToIndex({index: songs.length - 1});
    }
  };

  useEffect(() => {
    setTimeout(() => {
      moveToTop();
      setLoading(false)
    }, 2000);
  }, [songs]);

  useFocusEffect(
    useCallback(() => {
      getSongs();
    }, []),
  );

  const getSongs = async () => {
    const response = await getSongList();
    setSong(response.data);
  };

  const deleteData = async (id: number) => {
    await deleteSong(id);
    getSongs();
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={songs}
        inverted={true}
        ref={flatList}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                props.navigation.navigate('Details', {
                  itemId: item.id,
                })
              }>
              <Image style={styles.cardImage} source={{uri: item.image}} />

              <View style={styles.cardHeader}>
                <View style={styles.playBtn}>
                  <Image
                    style={styles.iconData1}
                    source={{
                      uri: 'https://img.icons8.com/color/96/3498db/play.png',
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.description}>{''}</Text>
                  <View style={styles.timeContainer}>
                    <Image
                      style={styles.iconData}
                      source={{
                        uri: 'https://img.icons8.com/color/96/3498db/clock.png',
                      }}
                    />
                    <Text style={styles.time}>{item.duration}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.socialBarContainer}>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity
                      style={styles.socialBarButton}
                      onPress={() => deleteData(item.id)}>
                      <Image
                        style={styles.icon}
                        source={{
                          uri: 'https://img.icons8.com/color/96/3498db/delete.png',
                        }}
                      />
                      <Text style={styles.socialBarLabel}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.socialBarSection}>
                    <TouchableOpacity
                      style={styles.socialBarButton}
                      onPress={() =>
                        props.navigation.navigate('Edit', {
                          itemId: item.id,
                        })
                      }>
                      <Image
                        style={styles.icon}
                        source={{
                          uri: 'https://img.icons8.com/color/96/3498db/edit.png',
                        }}
                      />
                      <Text style={styles.socialBarLabel}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      {loading && <_Loader visible={true} />}
      <TouchableOpacity
        style={styles.plusBtn}
        onPress={() => props.navigation.navigate('Add')}>
        <View>
          <Image source={Images.plus} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444444',
  },
  socialBarLabel: {
    fontWeight: '500',
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: '#00000021',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#d3d3d3',
    shadowOpacity: 0.4,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    backgroundColor: '#EEEEEE',
  },
  cardImage: {
    flex: 1,
    height: 150,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  description: {
    fontSize: 15,
    color: '#888',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
  },
  time: {
    fontSize: 13,
    color: '#808080',
    marginTop: 5,
  },
  icon: {
    width: 25,
    height: 25,
  },
  iconData: {
    width: 15,
    height: 15,
    marginTop: 5,
    marginRight: 5,
  },
  iconData1: {
    width: 30,
    height: 30,
  },
  timeContainer: {
    flexDirection: 'row',
  },
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    left: '45%',
    backgroundColor: '#7DE695',
    borderRadius: 100,
  },
  plusBtn: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: '43%',
    backgroundColor: 'green',
    borderRadius: 100,
  },
});
