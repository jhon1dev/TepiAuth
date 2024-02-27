import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();

  const forgotPassword = () => {
    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert(
            "Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail."
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(`Erro: ${errorCode}`);
        });
    } else {
      alert(
        "Por favor, insira seu e-mail antes de solicitar a redefinição de senha."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de senha</Text>
      <Text style={styles.description}>
        Insira seu e-mail abaixo para receber um link de redefinição de senha.
      </Text>

      <TextInput
        style={styles.input}
        textContentType="emailAddress"
        placeholder="usuário@dominio.com"
        value={email}
        onChangeText={(text: string) => setEmail(text)}
      />

      <TouchableOpacity onPress={forgotPassword} style={styles.resetButton}>
        <Text style={styles.resetText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
    marginBottom: 30,
    width: "80%",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    backgroundColor: "white",
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 10,
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#36454F",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 40,
  },
  resetText: {
    color: "white",
  },
});

export default ForgotPassword;
