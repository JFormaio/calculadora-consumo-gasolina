import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
        alert('Por favor, Insira valores válidos.');
      }
    } else {
      alert('Por favor, Preencha todos os campos.');
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
      <Button title="Calcular Consumo" onPress={handleCalcular} />
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
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
