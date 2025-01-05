import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { router } from "expo-router";

export default function Register() {
  const [showForm, setShowForm] = useState(true);

  return (
    <ImageBackground
      source={require("../assets/images/background_image.jpg")}
      style={styles.backgroundImage}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          paddingHorizontal: 20,
        }}
      >
        {showForm ? (
          <View
            style={{
              height: 260,

              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Text style={[styles.title, { color: "#1a237e" }]}>Sign Up</Text>
            <Text style={styles.desc}>
              Create you accounr today to experience
            </Text>
            <Text style={styles.desc}>easy and organizer accounting.</Text>
          </View>
        ) : (
          <View style={{ marginTop: 80 }}></View>
        )}
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
                  color: "#1a237e",
                  fontWeight: "700",
                  marginBottom: 20,
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
                  color: "#1a237e",

                  fontWeight: "700",
                }}
              >
                Previous fields
              </Text>
            </TouchableOpacity>
          )}
          {!showForm && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Create Account</Text>
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
                  color: "#1a237e",

                  fontWeight: "700",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F1F4FF",
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "semibold",
  },
  button: {
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#1a237e",
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
    marginBottom: 10,
  },
  desc: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: -0.5,
  },
});
