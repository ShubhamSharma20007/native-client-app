import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

export default function Register() {
  const [showForm, setShowForm] = useState(true);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}
    >
      <View
        style={{
          height: 170,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Text style={styles.title}>Register Form</Text>
        <Text style={styles.desc}>Fill the fields for Registration form</Text>
      </View>
      <View>
        {showForm ? (
          <View style={{ marginBottom: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="BRC Full Name"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="School Name"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                maxLength={6}
                style={styles.input}
                placeholder="Pincode"
                inputMode="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="School Dise Code"
                inputMode="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Rojmel Name"
                inputMode="text"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Cluster Name"
                inputMode="text"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Block Name"
                inputMode="text"
              />
            </View>
          </View>
        ) : (
          <View style={{ marginBottom: 10 }}>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Bank Name"
                inputMode="text"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Bank  Branch Name"
                inputMode="text"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Bank  Account Name"
                inputMode="numeric"
                maxLength={12}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Address"
                inputMode="text"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                maxLength={10}
                style={styles.input}
                placeholder="Mobile No."
                inputMode="numeric"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Bussiness Email"
                inputMode="email"
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                numberOfLines={1}
                style={styles.input}
                placeholder="Password"
                inputMode="text"
              />
            </View>
          </View>
        )}

        {showForm ? (
          <TouchableOpacity
            onPress={() => {
              setShowForm(false);
            }}
          >
            <Text
              style={{
                textAlign: "right",
                marginRight: 20,
                fontSize: 16,
                color: "#1F8BEF",
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              Next fields
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setShowForm(true);
            }}
          >
            <Text
              style={{
                textAlign: "left",
                marginRight: 20,
                fontSize: 16,
                color: "#1F8BEF",
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              Previous fields
            </Text>
          </TouchableOpacity>
        )}
        {!showForm && (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Register</Text>
          </TouchableOpacity>
        )}
      </View>
      {!showForm && (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 6,
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Already have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#1F8BEF",
                textDecorationLine: "underline",
                fontWeight: "700",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
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
