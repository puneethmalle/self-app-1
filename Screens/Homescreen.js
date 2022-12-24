import React,{Component} from "react";
import {View, StyleSheet, TouchableOpacity, Text,Image} from "react-native";
import AppHeader from "../components/AppHeader";

export default class HomeScreen extends Component{
  
    render(){
        return(
            <View>
             <AppHeader />


             <View>
               <View   style = {styles.buttonContainer} >
                
                <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("AmericanFootballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>American Football</Text>
                  <Image source = {require("../assets/americanfootball.png")} style = {styles.image}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("Basketballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>Basketball</Text>
                  <Image source = {require("../assets/basketball.png")} style = {styles.image}></Image>
                  </TouchableOpacity>

                  <TouchableOpacity 
                  style={styles.buttons}
                  onPress={() => this.props.navigation.navigate("Footballscreen")}>
                  <Text style={{ fontSize:20, color:"white"}}>Football</Text>
                  <Image source = {require("../assets/football.png")} style = {styles.image}></Image>
                  </TouchableOpacity>


                  
                </View> 
             </View>
            </View>
        )
    }
  
}
const styles = StyleSheet.create({
    buttonsContainer: {
      alignSelf: 'center',
      marginTop: 50,
    },
    buttons: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderRadius: 15,
      backgroundColor:"purple",
      margin: 10,
      width: 200,
      height: 50,
    },
    
  });