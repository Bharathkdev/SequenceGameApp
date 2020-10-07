import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity
} from 'react-native';



const InGameScreen = props => {

    const[move, setMove] = useState(createArray(props.level));
    const[guessCount, setGuessCount] = useState(0);


    function createArray(level){
        var arrayLength = level*level;
        var twodarray= new Array();
        var finalarray = new Array();

        for(var i=1;i<arrayLength;i++){
            twodarray.push(i);
            finalarray.push(i);
        }
        twodarray[arrayLength-1] = "";
        finalarray[arrayLength-1] = "";
        const shuffledArray = shuffle(twodarray);
        twodarray = shuffledArray;      

        return displayMatrix(twodarray, finalarray, level);
    }

  
    function shuffle(arr){
    console.log("This is Shuffle");

        var i,
            j,
            temp;
        for (i = arr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        return arr;    
    };

    function displayMatrix(twodarray, resultArray, level){
  

        if(Array.isArray(twodarray) &&
        Array.isArray(resultArray) &&
        twodarray.length === resultArray.length &&
        twodarray.every((val, index) => val === resultArray[index])){
            console.log("Game Over");
            props.gameOver(guessCount);
        }
        else{
            if(level==3){
                return(
                    <View style={styles.table}>
                        { twodarray.map((item, key)=>(
                            <TouchableOpacity key={key} style={styles.threeLevelCell} onPress = {makeMove.bind(this, twodarray, key, item, props.level, resultArray)}><View style = {styles.textView}><Text style = {styles.text}>{ item } </Text></View></TouchableOpacity>)
                        )}
                    </View>
                );
            }

            if(level==4){
                return(
                    <View style={styles.table}>
                        { twodarray.map((item, key)=>(
                            <TouchableOpacity key={key} style={styles.fourLevelCell} onPress = {makeMove.bind(this, twodarray, key, item, props.level, resultArray)}><View style = {styles.textView}><Text style = {styles.text}>{ item } </Text></View></TouchableOpacity>)
                        )}
                    </View>
                );
            }
            if(level==5){
                return(
                    <View style={styles.table}>
                        { twodarray.map((item, key)=>(
                            <TouchableOpacity key={key} style={styles.fiveLevelCell} onPress = {makeMove.bind(this, twodarray, key, item, props.level, resultArray)}><View style = {styles.textView}><Text style = {styles.text}>{ item } </Text></View></TouchableOpacity>)
                        )}
                    </View>
                );
            }
        }
    };


    function makeMove(twodarray, key, item, level, resultArray){

        let emptyCell = twodarray.findIndex((number)=> number == ""); 

        console.log(key,emptyCell);
        console.log("key:", key%level, "empty:", emptyCell%level);

        if((key-emptyCell==-1 && (key%level)!=level-1) || (key-emptyCell==1 && (key%level)!=0) || Math.abs(key-emptyCell)==level ){
            twodarray[key] = "";
            twodarray[emptyCell] = item;
            setMove(displayMatrix(twodarray, resultArray, level));
            setGuessCount(curNumber => curNumber + 1);
        }

    };

    
    return (
       <View style = {styles.container}>
           <View style = {styles.textView}>
                <Text style = {{fontSize: 20}}>No.of.Moves: {guessCount}</Text>
           </View>
           <View style = {styles.mainContainer}>
            {move}
           </View>
           <View style = {styles.buttonContainer}>
                <Button 
                    title = "END GAME" 
                    onPress = {() => {props.gameOver(guessCount)}} />
           </View>
       </View>
    );
};

const styles = StyleSheet.create({
    textView: {
        marginBottom: 10
    },

    mainContainer: {
        marginTop: 75,
    },
    
    table: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 15
        
      },

      threeLevelCell: {
        flexBasis: '30%',
        flex: 1,
        borderWidth: 2,
        padding: 25,
        borderRadius: 3,
        backgroundColor: 'skyblue',        
      },

      fourLevelCell: {
        flexBasis: '25%',
        flex: 1,
        borderWidth: 2,
        padding: 25,
        borderRadius: 3,
        backgroundColor: 'skyblue',        
      },

      fiveLevelCell: {
        flexBasis: '20%',
        flex: 1,
        borderWidth: 2,
        padding: 25,
        borderRadius: 3,
        backgroundColor: 'skyblue',        
      },

      textView: {
          alignItems: 'center',
          justifyContent: 'center',
      },

      text: {
          fontSize: 15,
          color: 'white'
      },

      container: {
        marginTop: 100, 
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      buttonContainer: {
          marginTop: 100,
          width: 300
      }
});

export default InGameScreen;