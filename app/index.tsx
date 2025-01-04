import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

export default function Login() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
      <View
        style={{
          height: 260,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Login Form</Text>
        <Text style={styles.desc}>Enter your credential for login</Text>
      </View>

      <View style={{ marginBottom: 10 }}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Account Number"
            inputMode="decimal"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </View>

      <View
        style={{
          height: 140,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            fontWeight: "600",
            color: "#1F8BEF",
          }}
        >
          Forgot Password?
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}>
        <Text style={{ textAlign: "center", fontSize: 16 }}>
          Don't have a account?
        </Text>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,

              color: "#1F8BEF",
              textDecorationLine: "underline",
              fontWeight: "700",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,

              color: "#1F8BEF",
              textDecorationLine: "underline",
              fontWeight: "700",
            }}
          >
            Dashboard
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#E5EBFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#E5EBFF",
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    fontSize: 16,
    fontWeight: "semibold",
  },
  button: {
    paddingVertical: 20,
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#1F8BEF",
    borderRadius: 10,
  },
  textButton: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    textAlign: "center",
    fontSize: 16,
  },
});
