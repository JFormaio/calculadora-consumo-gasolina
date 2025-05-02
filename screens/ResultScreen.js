import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { media } = route.params;
  let corClassificacao;

  const getClassificacao = (media) => {
    if (media > 12) {
      corClassificacao = '#0c7941';
      return 'A';
    } 
    if (media > 10) {
      corClassificacao = '#9ea81f'
      return 'B';
    }
    if (media > 8) {
      corClassificacao = '#ebc400';
      return 'C';
    }
    if (media > 4){
      corClassificacao = '#eb9800'
      return 'D';
    } else {
      corClassificacao = '#da3b1e'
      return 'E';
    }
  };
  const classificacao = getClassificacao(media);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Média de Consumo</Text>
      <Text style={styles.result}>{media.toFixed(2)} Km/L</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: corClassificacao,}}>
        Classificação: {classificacao}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 4,
    marginVertical: 280,
    marginHorizontal: 40,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

/* 
Km	Litros	Média	Classificação
130	  10	  13	    A
120	  10	  12	    B
90	  9	    10	    C
64	  8	    8	      D
20	  5	    4	      E
*/