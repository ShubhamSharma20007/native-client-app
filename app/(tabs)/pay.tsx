import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Image,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

const Pay = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="book-outline" size={24} color="white" />
          <Text style={styles.headerTitle}>Pay</Text>
        </View>
        <Ionicons name="pencil" size={24} color="white" />
      </View>

      {/* Balance Cards */}
      <View style={styles.balanceContainer}>
        <View style={[styles.balanceCard]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRightWidth: 1,
                borderRightColor: "#eee",
              }}
            >
              <Text style={styles.balanceAmount}>₹ 234</Text>
              <Text style={styles.balanceLabel}>Total Balance</Text>
            </View>
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.balanceAmount}>₹ 234</Text>
              <Text style={styles.balanceLabel}>Cash in Hand</Text>
            </View>
          </View>
        </View>

        <View style={[styles.balanceCard]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              gap: 10,
            }}
          >
            <View
              style={{
                width: "50%",
                paddingVertical: 4,
                borderRightWidth: 1,
                borderRightColor: "#eee",
              }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.balanceLabel}>Total Balance</Text>
                <Text
                  style={[
                    styles.balanceAmount,
                    {
                      fontSize: 15,
                      fontWeight: "500",
                      color: "green",
                      paddingRight: 8,
                    },
                  ]}
                >
                  ₹ 234657
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.balanceLabel}>Online</Text>
                <Text
                  style={[
                    styles.balanceAmount,
                    {
                      fontSize: 15,
                      fontWeight: "500",
                      paddingRight: 8,
                    },
                  ]}
                >
                  ₹ 234
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "50%",
                borderColor: "#eee",
                paddingVertical: 4,
              }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.balanceLabel}>Total Balance</Text>
                <Text
                  style={[
                    styles.balanceAmount,
                    {
                      fontSize: 15,
                      fontWeight: "500",
                      color: "green",
                      paddingRight: 8,
                    },
                  ]}
                >
                  ₹ 234657
                </Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.balanceLabel}>Online</Text>
                <Text
                  style={[
                    styles.balanceAmount,
                    {
                      fontSize: 15,
                      fontWeight: "500",
                      paddingRight: 8,
                    },
                  ]}
                >
                  ₹ 234
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* View Report Button */}
      <TouchableOpacity style={styles.reportButton}>
        <AntDesign name="filetext1" size={20} color="#1a237e" />
        <Text style={styles.reportButtonText}>VIEW CASHBOOK REPORT</Text>
      </TouchableOpacity>

      {/* Date Section */}
      <ScrollView>
        <View style={styles.dateSection}>
          <Text style={styles.dateText}>08 JAN</Text>
          <View style={styles.entryCount}>
            <Text style={styles.entryText}>0 Entry</Text>
            <View style={styles.entryAmounts}>
              <Text style={styles.outAmount}>₹ 0</Text>
              <Text style={styles.inAmount}>₹ 0</Text>
            </View>
          </View>
        </View>
        <View style={styles.dateSection}>
          <Text style={styles.dateText}>08 JAN</Text>
          <View style={styles.entryCount}>
            <Text style={styles.entryText}>0 Entry</Text>
            <View style={styles.entryAmounts}>
              <Text style={styles.outAmount}>₹ 0</Text>
              <Text style={styles.inAmount}>₹ 0</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Empty State */}
      <View style={styles.emptyState}>
        {/* <Image 
          source={require('./path-to-your-empty-state-illustration.png')}
          style={styles.emptyStateImage}
        /> */}
        <Text style={styles.emptyStateText}>
          Hello! Let's make today's entries
        </Text>
      </View>

      {/* Bottom Buttons */}
      {/* <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.outButton}>
          <AntDesign name="minus" size={24} color="white" />
          <Text style={styles.buttonText}>OUT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inButton}>
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.buttonText}>IN</Text>
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity
        style={styles.bottomButtons}
        onPress={() => {
          // router.push("/components/rojmelPayForm");
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
        <Text style={{ color: "white" }}>Add Rojmel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 40,
    backgroundColor: "#1a237e",
    paddingVertical: 20,
  },
  headerCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  balanceContainer: {
    padding: 5,
  },
  balanceCard: {
    backgroundColor: "#fff",

    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#666",
  },
  balanceDetails: {
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingTop: 16,
  },
  balanceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  balanceText: {
    color: "#666",
  },
  balanceValue: {
    fontWeight: "bold",
  },
  reportButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  reportButtonText: {
    color: "#1a237e",
    marginLeft: 8,
    fontWeight: "bold",
  },
  dateSection: {
    padding: 16,
    marginBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    elevation: 3,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
  dateText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  entryCount: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  entryText: {
    color: "#666",
  },
  entryAmounts: {
    flexDirection: "row",
  },
  outAmount: {
    color: "red",
    marginRight: 16,
  },
  inAmount: {
    color: "green",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emptyStateImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
  },
  bottomButtons: {
    color: "white",
    paddingHorizontal: 20,
    gap: 10,
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    display: "flex",
    marginLeft: "auto",
    minWidth: "30%",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#1a237e",
    borderRadius: 50,
  },
  outButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff1744",
    padding: 16,
    borderRadius: 4,
    marginRight: 8,
  },
  inButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00c853",
    padding: 16,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Pay;
