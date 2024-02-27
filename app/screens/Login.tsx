import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../../App";

type LoginProps = NativeStackScreenProps<AppStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Erro de autenticação: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Autenticação realizada com sucesso!");
    } catch (error: any) {
      console.log(error);
      alert("Falha ao se registrar: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TEPI AUTHENTICATOR</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          value={password}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="#555505" /> //Conditional Statement, Includes Button
        ) : (
          <>
            <View style={{ marginVertical: 5 }} />

            <TouchableOpacity
              style={{
                backgroundColor: "#36454F",
                width: "100%",
                height: 37,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={signIn}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
            </TouchableOpacity>

            <View style={{ marginVertical: 5 }} />
            {/* <Button title="Create Account " onPress={signUp} /> */}

            <TouchableOpacity
              style={{
                backgroundColor: "#36454F",
                width: "100%",
                height: 37,
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={signUp}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#36454F",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: {
    color: "#36454F",
  },
});
