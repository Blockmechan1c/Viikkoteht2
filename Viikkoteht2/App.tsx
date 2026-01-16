import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Button, Text, View} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>This is modal...</Text>
              <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
            </View>
          </View>
        </Modal>
        <Button title="Show modal" onPress={() => setModalVisible(true)} />
        </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;