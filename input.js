import React from 'react';
import { StyleSheet, TextInput, Button, View, ToolbarAndroid, ToastAndroid } from 'react-native';
import  Firebase from 'react-native-firebase';

const Input = () => {
return(
    <View style= {Styles.screen}>
        
        <View>
            <TextInput 
                placeholder="Enter Your Phone Number" 
                keyboardType="phone-pad"
                maxLength = {10} 
                style={Styles.textStyle}></TextInput>
               <Button title="Submit"/>
            
            <TextInput placeholder="Enter OTP" style={Styles.textStyle}></TextInput>
            
            <Button title="Verify" />

        </View>
    </View>   
     );
};

const Styles = StyleSheet.create({
    screen : {
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonStyle : {
        width: "30%"
        
    },
    textStyle : {
        textAlign: 'center'
    }

});

export default Input;