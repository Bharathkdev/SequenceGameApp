/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import InGameScreen from './screens/InGameScreen';
import GameOverScreen from './screens/GameOverScreen';


const App: () => React$Node = () => {

  const[startGame, setStartGame] = useState(false);
  const[level, setLevel] = useState();
  const[gameOverState, setGameOverState] = useState(false);
  const[guess, setGuess] = useState();

  const startGameHandler = (level) => {
    setStartGame(true); 
    setLevel(level);
  }

  const gameOverHandler = (guessCount) => {
    setGameOverState(true);
    setGuess(guessCount);
  };

  const restartGameHandler = () => {
    content = <StartGameScreen onStartGame = {startGameHandler}/>;
    setGuess();
    setStartGame(false);
    setGameOverState(false);
    setLevel();
    };

  let content = <StartGameScreen onStartGame = {startGameHandler} />

  if(startGame){
    content = <InGameScreen level = {level} gameOver = {gameOverHandler} />
  }
  if(gameOverState){
    content = <GameOverScreen setGameOver = {restartGameHandler} guessCount = {guess} />
  }
  
  
  
    return (

    <View style = {styles.container}>
      {content}
    </View>     
    );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
 
});

export default App;
