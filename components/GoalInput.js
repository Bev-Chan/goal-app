import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer1}>
            <View style={styles.button}>
                <Button title="Cancel" onPress={props.onCancel} color="#F70101" />
            </View>
        </View>
        <Image
          style={styles.image}
          source={require('../assets/images/face.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Whats your goal?"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#023AFD" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFD0EE',
  },
  image: {
    width: 161.67,
    height: 155.14,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    color: '#120438',
    borderRadius: 26,
    width: '90%',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
  },
  buttonContainer1: {
    marginBottom: 50,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
