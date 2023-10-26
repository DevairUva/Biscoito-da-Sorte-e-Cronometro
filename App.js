import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, Alert } from "react-native";
import biscoito from './src/biscoito.png'
import biscoitoAberto from './src/biscoitoAberto.png'
import relogio from './src/cronometro.png'

class App extends Component {

  constructor(props) {
    super(props),
      this.state = {
        tempo: 0,
        botao: 'Iniciar',
        ultimo: null
      };

    this.iniciar = this.iniciar.bind(this);
    this.zerar = this.zerar.bind(this);

    // timer do relógio
    this.timer = null;
  }

  iniciar() {
    if (this.timer != null) {
      // Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'Iniciar' });
    } else {
      this.timer = setInterval(() => {
        this.setState({ tempo: this.state.tempo + 0.1 })
      }, 100);
      this.setState({ botao: 'Parar' });
    }
  }

  zerar() {
    if (this.timer != null) {
      // Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.tempo,
      tempo: 0,
      botao: "Iniciar"
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titulo}>Cronômetro</Text>

        <Image
          style={styles.img}
          source={relogio}
        />

        <Text style={styles.timer}> {this.state.tempo.toFixed(2)} </Text>

        <View style={styles.viewBtn}>
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <View style={styles.btnView}>
              <Text style={styles.btnTxt}> {this.state.botao} </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.zerar}>
            <View style={styles.btnView}>
              <Text style={styles.btnTxt}>Zerar</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.ultimo}>
          {this.state.ultimo > 0 ? 'Último tempo: '+ this.state.ultimo.toFixed(2) : 'Último tempo: '}
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 350,
    height: 400
  },
  texto: {
    color: 'white',
    fontSize: 50
  },
  timer: {
    color: 'white',
    fontSize: 90,
    marginTop: -230,
    marginBottom: 150
  },
  titulo: {
    color: 'white',
    fontSize: 50,
    marginBottom: 20
  },
  viewBtn: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    justifyContent: 'space-between'
  },
  btn: {
    backgroundColor: 'white',
    borderRadius: 12,
    width: 70,
    height: 50,
  },
  btnView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTxt: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold'
  },
  ultimo: {
    color: 'white',
    fontSize: 25,
    margin: 15
  },
})

export default App;













// ****** CRONÔMETRO

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20
//   },
//   img: {
//     width: 250,
//     height: 250
//   },
//   texto: {
//     color: 'black',
//     fontSize: 25
//   },
//   btn: {
//     width: 200,
//     height: 50,
//     backgroundColor: 'green',
//     margin: 20,
//     borderRadius: 25
//   },
//   btnView: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1
//   },
//   btnText: {
//     color: 'white'
//   }
// })

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       textoFrase: 'Frase secreta',
//       // img: require('./src/biscoito.png')
//       img: biscoito
//     };

//     this.abreBiscoito = this.abreBiscoito.bind(this);

//     this.frases = [
//       'Siga os bons e aprenda com eles.',
//       'O bom senso vale mais do que muito conhecimento.',
//       'O riso é a menor distância entre duas pessoas.',
//       'Seja Feliz.',
//       'Viva o hoje.'
//     ]
//   }

//   abreBiscoito(){
//     let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
//     this.setState({
//       textoFrase: '"'+ this.frases[numeroAleatorio]+'"',
//       img: biscoitoAberto
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>

//         <Text style={styles.texto}>Que tal abrir seu biscoito da sorte?</Text>
//         <Image
//           style={styles.img}
//           // source={biscoito}
//           source={this.state.img}
//         />

//         <TouchableOpacity style={styles.btn} onPress={this.abreBiscoito}>
//           <View style={styles.btnView}>
//             <Text style={styles.btnText}>Abrir</Text>
//           </View>
//         </TouchableOpacity>

//         <Text style={styles.texto}>{this.state.textoFrase}</Text>


//       </View>
//     )
//   }
// }

// export default App;