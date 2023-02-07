import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

const SortByPrice = () => {
  return (
    <View style={styles.sortContainer}>
      <Text style={styles.sortText}>Price: Low to High</Text>
      <Text style={styles.sortText}>Price: High to Low</Text>
      <Text style={styles.sortText}>Newly Arrived</Text>
    </View>
  );
};

const DropDown = () => {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleDownArrow = () => {
    setShowAccordion(!showAccordion);
  };
  return (
    <View style={styles.dropdownContainer}>
      <View style={styles.rowView}>
        <Text style={styles.dropDownText}>Sort by relevence</Text>
        <TouchableOpacity
          style={{justifyContent: 'center', marginBottom: 2}}
          onPress={handleDownArrow}>
          <Icon name="chevron-down" size={23} color="#999"/>
        </TouchableOpacity>
      </View>
      {showAccordion && (
        <View>
          <SortByPrice
            showAccordion={showAccordion}
            setShowAccordion={setShowAccordion}
          />
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  sortContainer: {
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'column',
    width: 120,
    height: 120,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
    marginTop: 6,
  },
  sortText: {
    marginVertical: 5,
    fontSize: 13,
    color: Colors.cardBackground,
    textAlign: 'center',
  },
  dropdownContainer: {
    padding:5,
    flexDirection: 'column',
    width: '100%',
    height: 30,
    borderWidth: 1,
    borderColor: Colors.cardBackground,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropDownText: {
    fontSize: 13,
    color: Colors.cardBackground,
    textAlign: 'center',
  },
});
