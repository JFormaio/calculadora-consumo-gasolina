import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [km, setKm] = useState('');
  const [litros, setLitros] = useState('');

  const handleCalcular = () => {
    if (km && litros) {
      const kmValue = parseFloat(km);
      const litrosValue = parseFloat(litros);
      if (!isNaN(kmValue) && !isNaN(litrosValue) && litrosValue !== 0) {
        const media = kmValue / litrosValue;
        navigation.navigate('Result', { media });
      } else {
        alert('Por favor, insira valores válidos.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Quilometragem percorrida (KM):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={km}
        onChangeText={setKm}
        placeholder="Digite a quilometragem"
      />
      <Text style={styles.label}>Litros de gasolina consumidos:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={litros}
        onChangeText={setLitros}
        placeholder="Digite a quantidade de litros"
      />
      <TouchableOpacity style={styles.button} onPress={handleCalcular}>
        <Text style={styles.label}>Calcular consumo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 17,
    marginVertical: 5,
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    marginVertical: 15,
    paddingVertical: 4,
    borderRadius: 6,
  }
});
