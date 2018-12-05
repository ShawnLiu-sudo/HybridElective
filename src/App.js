import React, { Component, Fragment } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Header from './components/Header';
import ListContainer from './components/ListContainer';

class App extends Component {
  constructor(){
    super()

    try {
      var config = {
        apiKey: "AIzaSyA_jn5N28330IwpQCBwZ8-w343Wvsd3Rjg",
        authDomain: "hybridelective-4c7a0.firebaseapp.com",
        databaseURL: "https://hybridelective-4c7a0.firebaseio.com",
        projectId: "hybridelective-4c7a0",
        storageBucket: "hybridelective-4c7a0.appspot.com",
        messagingSenderId: "723802225790"
      };
      firebase.initializeApp(config);
    } catch (error) {
      console.log(error)
    }
    firebase.firestore().settings({timestampsInSnapshots: true});

    this.state = {players: [
        {id: 1, name: "Guo Ailun", position: "Point Guard"},
        {id: 2, name: "Yi Jianlian", position: "Power Foward"},
        {id: 3, name: "Yao Ming", position: "Center"}
    ]}
    this.getPlayers()
}

getPlayers = async () => {
    let newPlayers = [];
    await firebase.firestore().collection("favPlayers").orderBy("sortBy").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          console.log(doc.data());
          newPlayers.push(doc.data());
      });
  });
  this.setState({players: newPlayers});
}

deletePlayer = async (playerId) => {
  // let newPlayers = this.state.players.filter((item) => {
  //     if(playerId !== item.id){
  //         return true;
  //     }
  // });
  // this.setState({players: newPlayers});


  await firebase.firestore().collection("favPlayers").doc(JSON.stringify(playerId)).delete()
  .then(console.log("works")).catch(function (error) {
      console.log('error', error);
  })
  this.getPlayers();
}

addPlayer = (newPlayer) => {
  // let newPlayers = this.state.players;
  // newPlayers.push(newPlayer);
  // this.setState({players: newPlayers});

  firebase.firestore().collection("favPlayers").doc(JSON.stringify(newPlayer.id)).set({
    name: newPlayer.name,
    position: newPlayer.position,
    sortBy: newPlayer.id
    }).then(console.log("works")).catch(function (error) {
      console.log('error', error);
    })
    this.getPlayers();
}


  render() {
    return (
        <Fragment>
          <Header />
          <ListContainer players={this.state.players} addPlayer={this.addPlayer} deletePlayer={this.deletePlayer} getPlayers={this.getPlayers}/>
        </Fragment>
    );
  }
}

export default App;
