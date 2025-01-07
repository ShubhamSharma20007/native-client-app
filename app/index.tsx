import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { Instance } from "@/lib/instance";
import { LOGIN } from "@/constant/apis";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import

type InputsType = {
  bank_account_no: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const [inputsValue, setInputsValue] = useState<InputsType>({
    bank_account_no: "",
    password: "",
  });
  const handleSubmit = async () => {
    try {
      if (!inputsValue.bank_account_no || !inputsValue.password) {
        Toast.show({
          type: "error",
          text1: "❌ Error",
          text2: "Both fields are required!",
        });
        return;
      }

      const response = await Instance.post(LOGIN, inputsValue);
      if (response.status === 200 || response.status === 201) {
        const token = response.data.data.token;
        await AsyncStorage.setItem("token", JSON.stringify(token));
        Toast.show({
          type: "success",
          text1: "✅ Success",
          text2: "Login Successful",
          text2Style: {
            fontSize: 12,
          },
        });
        router.push("/(tabs)");
      }
    } catch (err: any) {
      console.warn("Error:", err);
      Toast.show({
        type: "error",
        text1: "❌ Error",
        text2: err.response?.data?.message || "An error occurred",
        text2Style: {
          fontSize: 12,
        },
      });
    }
  };

  return (
    <ImageBackground
      source={require("../assets/images/background_image.jpg")}
      style={styles.backgroundImage}
    >
      <StatusBar animated={true} />
      <View style={styles.mainContainer}>
        <View
          style={{
            height: 260,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.title, { color: "#1a237e" }]}>Sign In</Text>
          <Text style={styles.desc}>Welcome back you've</Text>
          <Text style={styles.desc}>been missed!</Text>
        </View>

        <View style={{ marginBottom: 10 }}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Account Number"
              inputMode="decimal"
              value={inputsValue.bank_account_no}
              onChangeText={(text) =>
                setInputsValue((prev) => ({
                  ...prev,
                  bank_account_no: text,
                }))
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              value={inputsValue.password}
              onChangeText={(text) =>
                setInputsValue((prev) => ({ ...prev, password: text }))
              }
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <View
          style={{
            height: 100,
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Link
            href="/resetPassword"
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              color: "#1a237e",
            }}
          >
            Forgot Password
          </Link>
        </View>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 6 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Don't have an account?
          </Text>

          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 16,
                color: "#1a237e",
                fontWeight: "700",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
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
    fontSize: 20,
    fontWeight: "700",
  },
});
