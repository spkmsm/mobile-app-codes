/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Modal,
  Button,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import React, {useState} from 'react';

const ExploreModal = () => {
  const [show, hide] = useState(false);
  const [off, change] = useState(false);
  console.log(off);
  return (
    <View style={styles.outerBox}>
      <TouchableOpacity
        style={styles.myBtn}
        onPress={() => {
          hide(true);
        }}>
        <Text>Open My Modal</Text>
      </TouchableOpacity>
      <Modal visible={show} transparent>
        <View style={[styles.outerBox, {backgroundColor: 'transparent'}]}>
          <View style={styles.modalBox}>
            <Text
              style={{color: 'blue'}}
              onPress={() => {
                hide(false);
              }}>
              Click Here to close this
            </Text>
          </View>
        </View>
      </Modal>
      <Switch
        value={off}
        onChange={() => {
          // change(off === true ? false : true);
          change(!off);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerBox: {
    backgroundColor: 'lightgray',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  myBtn: {
    width: 150,
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 7,
  },
  modalBox: {
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExploreModal;
