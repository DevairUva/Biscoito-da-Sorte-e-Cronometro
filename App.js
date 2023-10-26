import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from "react-native";
import biscoito from './src/biscoito.png'
import biscoitoAberto from './src/biscoitoAberto.png'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  img: {
    width: 250,
    height: 250
  },
  texto: {
    color: 'black',
    fontSize: 25
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    margin: 20,
    borderRadius: 25
  },
  btnView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  btnText: {
    color: 'white'
  }
})

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Frase secreta',
      // img: require('./src/biscoito.png')
      img: biscoito
    };

    this.abreBiscoito = this.abreBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.',
      'O bom senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Seja Feliz.',
      'Viva o hoje.'
    ]
  }

  abreBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"'+ this.frases[numeroAleatorio]+'"',
      img: biscoitoAberto
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.texto}>Que tal abrir seu biscoito da sorte?</Text>
        <Image
          style={styles.img}
          // source={biscoito}
          source={this.state.img}
        />

        <TouchableOpacity style={styles.btn} onPress={this.abreBiscoito}>
          <View style={styles.btnView}>
            <Text style={styles.btnText}>Abrir</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.texto}>{this.state.textoFrase}</Text>


      </View>
    )
  }
}

export default App;