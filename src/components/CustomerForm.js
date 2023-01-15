import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../constants/Colors';

const CustomerForm = () => {
  const [showContinueButton, setShowContinueButton] = useState(true);
 const [showSummary, setShowSummary] = useState(false);
  const handleContinueButton = () => {
    setShowContinueButton(false);
    setShowSummary(true);
  };
  return (
    <View style={styles.column}>
      <View style={styles.row}>
        <TextInput
          placeholder="Name"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Pincode"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Locality"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />
      </View>
      <View>
        <TextInput
          placeholder="Address"
          multiline={true}
          placeholderTextColor={Colors.cardBackground}
          style={styles.addressInput}
        />
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="City/Town"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />

        <TextInput
          placeholder="Landmark"
          placeholderTextColor={Colors.cardBackground}
          style={styles.nameInput}
        />
      </View>

      <View>
        <Text style={{color: Colors.cardBackground, fontSize: 15}}>Type</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Home</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Work</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity>
            <View style={styles.roundView}>{''}</View>
          </TouchableOpacity>
          <Text style={styles.typeTxt}>Other</Text>
        </View>
      </View>

      <View>
        {showContinueButton ? (
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={handleContinueButton}>
            <Text style={styles.orderText}>Continue</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CustomerForm;

const styles = StyleSheet.create({
  nameInput: {
    padding: 5,
    fontSize: 15,
    color: Colors.cardBackground,
    width: '40%',
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  addressInput: {
    padding: 5,
    fontSize: 15,
    color: Colors.cardBackground,
    width: '83%',
    height: 70,
    margin: 5,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  roundView: {
    width: 15,
    height: 15,
    borderRadius: 9,
    borderWidth: 0.5,
    borderColor: Colors.cardBackground,
    margin: 10,
  },
  typeTxt: {
    fontSize: 15,
    color: Colors.cardBackground,
    textAlign: 'center',
    marginTop: 7,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  placeOrder: {
    backgroundColor: Colors.mainBackground,
    width: '40%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'flex-end',
  },
  orderText: {
    color: '#fff',
    fontSize: 17,
    textAlign: 'center',
  },
});
