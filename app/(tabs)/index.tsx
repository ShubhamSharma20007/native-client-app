import React, { useEffect, useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Platform,
  Keyboard,
} from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getHeads, updateHeads } from "@/helper/api-communication";
import { handleSplitName } from "@/helper/splitName";
import { currency } from "@/helper/currency";
import { useNavigation } from "expo-router";
import { useRoute } from "@react-navigation/native";
import { useCustomerContext } from "../context/customerContext";
const Drawer = createDrawerNavigator();

interface Customer {
  id: string;
  name: string;
  amount: number;
  dueDate?: string;
  reminderDate?: string;
  lastAction?: string;
}

interface EditedValues {
  head_name: string;
  opening_balance_bank: string;
  opening_balance_cash: string;
}

const CustomersScreen = ({ navigation }: { navigation: any }) => {
  const router = useRouter();
  const route = useRoute();
  const { customer, setCustomers } = useCustomerContext();
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedValues, setEditedValues] = useState<EditedValues>({
    head_name: "",
    opening_balance_bank: "",
    opening_balance_cash: "",
  });

  useEffect(() => {
    (async () => {
      const getHeadsData = await getHeads();
      if (getHeadsData?.data.length > 0) {
        setCustomers(getHeadsData?.data);
      }
    })();
  }, []);

  function handleEdit(index: number, customer: any) {
    setEditingId(index);
    setEditedValues({
      head_name: customer.head_name,
      opening_balance_cash: customer.opening_balance_cash.toString(),
      opening_balance_bank: customer.opening_balance_bank.toString(),
    });
  }
  const handleSubmit = async (id: string) => {
    console.log("-----------------------------------");
    console.log("Saving changes:", editedValues);
    const updateHead = await updateHeads(id, editedValues);
    if (updateHead.statusCode === 200) {
      // reload the customer data
      const getHeadsData = await getHeads();
      if (getHeadsData?.data.length > 0) {
        setCustomers(getHeadsData?.data);
      }
      setEditingId(null);
      setEditedValues({
        head_name: "",
        opening_balance_bank: "",
        opening_balance_cash: "",
      });
      Keyboard.dismiss();
    }
  };
  const handleChange = (field: string, value: string) => {
    setEditedValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <StatusBar animated={true} barStyle={"light-content"} />
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.storePicker}>
            <Ionicons name="book-outline" size={24} color="white" />
            <Text style={styles.storeText}>Rojmel Store</Text>
          </View>
        </View>

        {/* Rest of your existing code */}
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
              <Text
                style={[
                  styles.balanceAmount,
                  {
                    color: "#4CAF50",
                  },
                ]}
              >
                ₹ 234
              </Text>
              <Text style={[styles.balanceLabel]}>Payment In</Text>
            </View>
            <View
              style={{
                flex: 1,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.balanceAmount,
                  {
                    color: "#FF5757",
                  },
                ]}
              >
                ₹ 234
              </Text>
              <Text style={styles.balanceLabel}>Payment Out</Text>
            </View>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Customers"
            placeholderTextColor="#666"
          />
          <View style={styles.filterContainer}>
            <Ionicons name="filter" size={20} color="#666" />
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          {customer.map((customer, index) =>
            editingId === index ? (
              <View
                key={`editingId-${customer._id}`}
                style={styles.customerItem}
              >
                <View style={[styles.customerInfo, { flex: 3 }]}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {handleSplitName(customer.head_name)}
                    </Text>
                  </View>
                  <View style={{ gap: 4 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Text style={{ fontWeight: "500", fontSize: 13 }}>
                        Head Name :{" "}
                      </Text>
                      <TextInput
                        style={{
                          borderWidth: 1,
                          borderColor: "#ddd",
                          padding: 6,

                          borderRadius: 4,
                          width: "40%",
                          fontSize: 11.5,
                        }}
                        value={editedValues.head_name}
                        onChangeText={(value) =>
                          handleChange("head_name", value)
                        }
                        keyboardType="default"
                        placeholder="Head Name"
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15,
                      }}
                    >
                      <Text style={{ fontWeight: "500", fontSize: 13 }}>
                        Bank Amt :{" "}
                      </Text>
                      <TextInput
                        style={{
                          borderWidth: 1,
                          borderColor: "#ddd",
                          padding: 6,

                          borderRadius: 4,
                          width: "40%",
                          fontSize: 11.5,
                        }}
                        value={editedValues.opening_balance_bank}
                        onChangeText={(value) =>
                          handleChange("opening_balance_bank", value)
                        }
                        keyboardType="numeric"
                        placeholder="Opening Balance Bank"
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 15,
                      }}
                    >
                      <Text style={{ fontWeight: "500", fontSize: 13 }}>
                        Cash Amt :{" "}
                      </Text>
                      <TextInput
                        style={{
                          borderWidth: 1,
                          borderColor: "#ddd",
                          padding: 6,
                          borderRadius: 4,
                          width: "40%",
                          fontSize: 11.5,
                        }}
                        value={editedValues.opening_balance_cash}
                        onChangeText={(value) =>
                          handleChange("opening_balance_cash", value)
                        }
                        keyboardType="numeric"
                        placeholder="Opening Balance Cash"
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.amountContainer, { flex: 1 }]}>
                  <TouchableOpacity
                    onPress={() => {
                      handleSubmit(customer._id);
                    }}
                    style={styles.requestButton}
                  >
                    <EvilIcons
                      style={{ color: "#1976D2" }}
                      name="check"
                      size={22}
                      color="black"
                    />
                    <Text style={styles.requestText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <>
                <View
                  key={`original-${customer._id}`}
                  style={styles.customerItem}
                >
                  <View style={styles.customerInfo}>
                    <View style={styles.avatar}>
                      <Text style={styles.avatarText}>
                        {handleSplitName(customer.head_name)}
                      </Text>
                    </View>
                    <View>
                      <Text style={styles.customerName}>
                        {customer.head_name}
                      </Text>
                      {customer.updatedAt && (
                        <Text style={[styles.dueDate]}>
                          Opening Bal :{" "}
                          <Text style={{ fontWeight: "500" }}>
                            {currency(customer.opening_balance_bank)}
                          </Text>
                        </Text>
                      )}
                      {customer.updatedAt && (
                        <Text style={styles.dueDate}>
                          Opening Cash :{" "}
                          <Text style={{ fontWeight: "500" }}>
                            {currency(customer.opening_balance_cash)}
                          </Text>
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.amountContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        handleEdit(index, customer);
                      }}
                      style={styles.requestButton}
                    >
                      <EvilIcons
                        style={{ color: "#1976D2" }}
                        name="pencil"
                        size={22}
                        color="black"
                      />
                      <Text style={styles.requestText}>UPDATE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )
          )}
        </ScrollView>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/components/personAddForm")}
        >
          <Text style={styles.addButtonText}>ADD HEAD</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// Drawer Screens
// const SettingsScreen = () => (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const Dashboard = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen
//         name="index"
//         component={CustomersScreen}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//     </Drawer.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  storePicker: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
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
  storeText: {
    color: "white",
    fontSize: 20,
    marginRight: 8,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  staffText: {
    color: "white",
    fontSize: 16,
  },
  actionButtons: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionItem: {
    alignItems: "center",
  },
  actionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  iconText: {
    color: "white",
    fontSize: 18,
  },
  actionText: {
    fontSize: 12,
    color: "#333",
  },
  loanButton: {
    backgroundColor: "#E3F2FD",
    padding: 8,
    borderRadius: 8,
  },
  loanText: {
    fontSize: 12,
    color: "#1976D2",
  },
  applyText: {
    fontSize: 14,
    color: "#1976D2",
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1a237e",
  },
  tabText: {
    color: "#666",
  },
  activeTabText: {
    color: "#1a237e",
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 16,
  },
  customerItem: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    justifyContent: "space-between",
    alignItems: "center",
  },
  customerInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#1976D2",
    fontWeight: "bold",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  dueDate: {
    fontSize: 12,
    color: "#666",
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  requestButton: {
    backgroundColor: "#E3F2FD",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 1,
  },
  requestText: {
    color: "#1976D2",
    fontSize: 12,
  },
  addButton: {
    backgroundColor: "#1a237e",
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomersScreen;
