import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
function ButtonComponent() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <View>
      <Text>My App</Text>
      <Button
        accessibilityRole={'buttonRole'}
        title={newButtonColor}
        style={{backgroundColor: buttonColor}}
        onPress={() => setButtonColor(newButtonColor)}>
        <Text style={{color: '#fff'}}> Change to {newButtonColor} </Text>
      </Button>
    </View>
  );
}

export default ButtonComponent;
