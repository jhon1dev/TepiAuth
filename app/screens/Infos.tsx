import { View, StyleSheet, Button, ImageBackground } from "react-native";
import React, { useState } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  return (
    <ImageBackground
      source={require('/assets/background.jpg')}
      style={styles.backgroundImage}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button
          color={"#36454F"} 
          onPress={() => FIREBASE_AUTH.signOut()}
          title="LogOut"
        />
      </View>
    </ImageBackground>
  );
};

export default List;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
