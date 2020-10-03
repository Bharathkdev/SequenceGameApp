import React from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

const GameOverScreen = props => {

    return(
            <View style = {styles.container}>
                    <Text style = {styles.textfontSizeGameOver}>Game Over!!!</Text>
                    <View style = {styles.textView}>
                        <Text style = {styles.textfontSizeGuessCount}>No of Moves: {props.guessCount}</Text>
                    </View>
                    <View style = {styles.buttonContainer}>
                        <Button 
                            title = "Play Again!!"
                            onPress = {props.setGameOver}    
                        />
                    </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },

    textfontSizeGameOver: {
        fontSize: 35,
        color: 'white',
        marginTop: -200
    },

    textfontSizeGuessCount: {
        fontSize: 30,
        color: 'white'
    },  

    textView: {
        marginTop: 30,
    },

    buttonContainer: {
        marginTop: 40,
        height: 10,
        width: 300,
        
    },

});

export default GameOverScreen;