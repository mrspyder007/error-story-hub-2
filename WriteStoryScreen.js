



import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import db from "../config.js";


export default class ReadStoryScreen extends React.Component {
    constructor()
    {
      this.state={
        title:"",
        author:"",
        story:"",
      }
    }

    submitStory=async()=>
    {
       db.collection("users").add({
        story: this.state.story,
        title:this.state.title,
        author:this.state.author
       })
    }
    render() {
        return(
            <View>
                <Text style={{textAlign: 'center', backgroundColor: "pink",fontSize:15, paddingBottom: 20, paddingTop: 20}}>Story Hub</Text>
                <TextInput
                style={styles.textInput1}
                placeholder={"Story Name"}
                />
                <TextInput
                style={styles.textInput2}
                placeholder={"Author name"}/>
                <TextInput
                style={styles.textInput3}
                placeholder={"type your story here"}/>
                <TouchableOpacity style={styles.submit}
                onPress={this.submitStory}
                >
                    <Text style={styles.buttonText} >Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput1: {
        borderWidth: 3, 
        marginTop: 130, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput2: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput3: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450,
        height: 200, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    submit: {
        borderWidth:2,
        alignSelf: 'center',
        width:90,
        height: 33,
        marginTop:10,
        backgroundColor: "aqua",
        borderRadius:100
    },
    buttonText: {
        textAlign: 'center'
    }
})

