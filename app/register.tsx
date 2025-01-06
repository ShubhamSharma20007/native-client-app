import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  View,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
} from "react-native";
import { router } from "expo-router";
import { Instance } from "@/lib/instance";
import Toast from "react-native-toast-message";
import { REGISTER } from "@/constant/api-communication";
import { ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
interface FormData {
  brc_full_name: string;
  school_name: string;
  pincode: string;
  school_dice_code: string;
  rojmel_name: string;
  cluster_name: string;
  block_name: string;
  bank_name: string;
  bank_branch_name: string;
  bank_account_no: string;
  address: string;
  district: string;
  sub_division: string;

  mobile_no: string;
  business_email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();
  const [currentSection, setCurrentSection] = useState(1);
  const [isloading, setLoading] = useState(false);
  const { height } = Dimensions.get("window");
  const [formData, setFormData] = useState<FormData>({
    brc_full_name: "",
    school_name: "",
    pincode: "",
    school_dice_code: "",
    rojmel_name: "",
    cluster_name: "",
    block_name: "",
    bank_name: "",
    bank_branch_name: "",
    bank_account_no: "",
    address: "",
    district: "",
    sub_division: "",
    mobile_no: "",
    business_email: "",
    password: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateSection = (section: number): boolean => {
    switch (section) {
      case 1:
        const section1Fields = [
          "brc_full_name",
          "school_name",
          "school_dice_code",
          "rojmel_name",
          "cluster_name",
          "block_name",
        ];
        const emptyField1 = section1Fields.find(
          (field) => !formData[field as keyof FormData]
        );
        if (emptyField1) {
          Toast.show({
            type: "success",
            text1: "❌ Error",
            text2Style: {
              fontSize: 12,
            },
            text2: `Please fill in ${emptyField1
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}`,
          });
          return false;
        }
        return true;

      case 2:
        const section2Fields = [
          "bank_name",
          "bank_branch_name",
          "bank_account_no",
          "address",
          "district",
          "sub_division",
          "pincode",
        ];
        const emptyField2 = section2Fields.find(
          (field) => !formData[field as keyof FormData]
        );
        if (emptyField2) {
          Toast.show({
            type: "success",
            text1: "❌ Error",
            text2Style: {
              fontSize: 12,
            },
            text2: `Please fill in ${emptyField2
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}`,
          });

          return false;
        }
        return true;

      case 3:
        const section3Fields = ["mobile_no", "business_email", "password"];
        const emptyField3 = section3Fields.find(
          (field) => !formData[field as keyof FormData]
        );
        if (emptyField3) {
          Toast.show({
            type: "success",
            text1: "❌ Error",
            text2Style: {
              fontSize: 12,
            },
            text2: `Please fill in ${emptyField3
              .replace(/([A-Z])/g, " $1")
              .toLowerCase()}`,
          });
          return false;
        }
        return true;

      default:
        return false;
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      if (currentSection < 3) setCurrentSection(currentSection + 1);
    }
  };

  const previousSection = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    if (validateSection(3)) {
      try {
        const response = await Instance.post(REGISTER, formData);
        if (response.status === 200 || response.status === 201) {
          Toast.show({
            type: "success",
            text1: "✅ Sucesss",
            text2Style: {
              fontSize: 12,
            },
            text2: "User Register Successfully",
          });
          router.push("/");
        }
      } catch (err: any) {
        console.warn("Error:", err);
        if (err.response) {
          Toast.show({
            type: "error",
            text1: "❌ Error",
            text2Style: {
              fontSize: 12,
            },
            text2: err.response.data.message,
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

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
        <View style={{ height: 220, justifyContent: "center" }}>
          <Text style={[styles.title, { color: "#1a237e" }]}>Sign Up</Text>
          <Text style={styles.desc}>
            Create your account today to experience
          </Text>
          <Text style={styles.desc}>easy and organized accounting.</Text>
        </View>

        <View>
          {currentSection === 1 && (
            <View style={{ marginBottom: 10 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="BRC Full Name *"
                  value={formData.brc_full_name}
                  onChangeText={(value) =>
                    handleInputChange("brc_full_name", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="School Name *"
                  value={formData.school_name}
                  onChangeText={(value) =>
                    handleInputChange("school_name", value)
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="School Dise Code *"
                  inputMode="numeric"
                  value={formData.school_dice_code}
                  onChangeText={(value) =>
                    handleInputChange("school_dice_code", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Rojmel Name *"
                  value={formData.rojmel_name}
                  onChangeText={(value) =>
                    handleInputChange("rojmel_name", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Cluster Name *"
                  value={formData.cluster_name}
                  onChangeText={(value) =>
                    handleInputChange("cluster_name", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Block Name *"
                  value={formData.block_name}
                  onChangeText={(value) =>
                    handleInputChange("block_name", value)
                  }
                />
              </View>
            </View>
          )}

          {currentSection === 2 && (
            <View style={{ marginBottom: 10 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Bank Name *"
                  value={formData.bank_name}
                  onChangeText={(value) =>
                    handleInputChange("bank_name", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Bank Branch Name *"
                  value={formData.bank_branch_name}
                  onChangeText={(value) =>
                    handleInputChange("bank_branch_name", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Bank Account Name *"
                  maxLength={12}
                  inputMode="numeric"
                  value={formData.bank_account_no}
                  onChangeText={(value) =>
                    handleInputChange("bank_account_no", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Address *"
                  value={formData.address}
                  onChangeText={(value) => handleInputChange("address", value)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="District *"
                  value={formData.district}
                  onChangeText={(value) => handleInputChange("district", value)}
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Sub Division *"
                  value={formData.sub_division}
                  onChangeText={(value) =>
                    handleInputChange("sub_division", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Pincode *"
                  maxLength={6}
                  inputMode="numeric"
                  value={formData.pincode}
                  onChangeText={(value) => handleInputChange("pincode", value)}
                />
              </View>
            </View>
          )}

          {currentSection === 3 && (
            <View style={{ marginBottom: 10 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number *"
                  maxLength={10}
                  inputMode="numeric"
                  value={formData.mobile_no}
                  onChangeText={(value) =>
                    handleInputChange("mobile_no", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Business Email *"
                  value={formData.business_email}
                  onChangeText={(value) =>
                    handleInputChange("business_email", value)
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Password *"
                  secureTextEntry
                  value={formData.password}
                  onChangeText={(value) => handleInputChange("password", value)}
                />
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {currentSection > 1 && (
              <TouchableOpacity style={styles.button} onPress={previousSection}>
                <Text style={styles.textButton}>Previous</Text>
              </TouchableOpacity>
            )}
            {currentSection < 3 ? (
              <TouchableOpacity
                style={[styles.button, { marginLeft: "auto" }]}
                onPress={nextSection}
              >
                <Text style={styles.textButton}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleSubmit();
                }}
              >
                {/* <ActivityIndicator size="small" color="white" /> */}
                <Text style={styles.textButton}>Create Account</Text>
              </TouchableOpacity>
            )}
          </View>

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
        </View>
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
    width: "48%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    fontWeight: "500",
    letterSpacing: -0.5,
  },
});
