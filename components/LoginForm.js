import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';

const baseUrl = "http://192.168.0.79/api/login.php";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await axios.post(baseUrl, {
        "user_name": email,
        "user_pass": password,
      });

      console.log(response.data);

      if (response.data[0].Message == "Login successful" ) {
        navigation.navigate('Home'); // Navigate to Home screen
      } else {
        console.log(response.data[0]);
        setError(response.data[0].Message);
      }
    } catch (error) {
      console.error(error);
      setError("Invalid credentials");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SQL Injection Testing App</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});

export default LoginForm;
