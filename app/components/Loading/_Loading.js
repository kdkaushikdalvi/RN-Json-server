import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const Loading = props => {
  return (
    <Modal
      visible={props.visible}
      animationType={'fade'}
      transparent={true}
      onRequestClose={() => {}}>
      <View style={styles.modalWrap}>
        <ActivityIndicator color="white" size="large" />
      </View>
    </Modal>
  );
};

export default Loading;
