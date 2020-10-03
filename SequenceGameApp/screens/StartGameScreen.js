import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Dropdown 
} from 'react-native-material-dropdown';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          


const StartGameScreen = props => {

  const[level, setLevel] = useState(3);
    

  let chooseLevel = [{
    label: '3',
    value: 3
    }, {
    label: '4',
    value: 4
    }, {
    label: '5',
    value: 5
    }
    ]

    const setSelectedStateLevel = (ddlValue) =>{
      setLevel(ddlValue);
     // console.log(ddlValue);
    }
  


  return (
      <View style = {styles.container}>
        <Text style = {styles.textView}>1-15 SEQUENCE GAME</Text>
        <View style = {styles.buttonContainer}>
          <View style = {styles.levelView}>
            <View style = {styles.chooseLevelTextView}>
              <Text style = {styles.levelText}>Choose Level</Text>
            </View>
            <View style = {styles.dropDownView}>
              <Dropdown 
                useNativeDriver={true}
                data={chooseLevel} 
                value={level} 
                itemColor={'skyblue'}  
                onChangeText={(value,index,data)=>setSelectedStateLevel(value)} 
              />
            </View>
          </View>
          <TouchableOpacity onPress = {console.log("calling strt game")}>
            <Button 
              title = "START GAME"
              onPress = {() => {props.onStartGame(level)}}
            />
          </TouchableOpacity>
        </View>
      </View>     
  );
}

const styles = StyleSheet.create({
      container: {
        marginTop: 200, 
        justifyContent: 'center',
        alignItems: 'center'
      },
        
      textView: {
        fontSize: 30,
      },
    
      buttonContainer: {
        marginTop: 50,
        width: 200
      },

      levelView: {
        marginLeft: -30,
        marginTop: 10,
        marginBottom: 50,
      },

      levelText: {
        fontSize: 20,
      },

      dropDownView: {
        marginTop: 2,
        marginLeft: 80,
        marginRight: 80,
      },

      chooseLevelTextView: {
        alignItems: 'center'
      }
});

export default StartGameScreen;