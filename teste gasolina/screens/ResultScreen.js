import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { media } = route.params;

  const getClassificacao = (media) => {
    if (media > 12) return 'A';
    if (media > 10) return 'B';
    if (media > 8) return 'C';
    if (media > 4) return 'D';
    return 'E';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resultado</Text>
      <Text style={styles.result}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={styles.classificacao}>Classificação: {getClassificacao(media)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    marginBottom: 10,
  },
  classificacao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2e86de',
  },
});
