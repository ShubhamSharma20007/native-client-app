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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getHeads } from "@/helper/api-communication";

const Drawer = createDrawerNavigator();

interface Customer {
  id: string;
  name: string;
  amount: number;
  dueDate?: string;
  reminderDate?: string;
  lastAction?: string;
}

interface Head {
  createdAt: string;
  financial_year_id: string;
  head_name: string;
  opening_balance_bank: string;
  opening_balance_cash: string;
  status: boolean;
  updatedAt: string;
  user_id: string;
  __v?: number | boolean;
  _id: string;
}

const CustomersScreen = ({ navigation }: { navigation: any }) => {
  const router = useRouter();
  const customers: Customer[] = [
    { id: "IS", name: "Ishan Sharma", amount: 4567, dueDate: "20 Sep 2023" },
    { id: "RV", name: "Raaghav Verma", amount: 47, dueDate: "12 days" },
  ];

  const [customer, setCustomer] = useState<Head[]>([]);

  useEffect(() => {
    (async () => {
      const getHeadsData = await getHeads();
      if (getHeadsData?.data?.data.length > 0) {
        setCustomer(getHeadsData?.data?.data);
      }
    })();
  }, []);

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
        {/* <View style={styles.actionButtons}>
          <View style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: "#FF5757" }]}>
              <Text style={styles.iconText}>₹</Text>
            </View>
            <Text style={styles.actionText}></Text>
          </View>
          <View style={styles.actionItem}>
            <View style={[styles.actionIcon, { backgroundColor: "#4CAF50" }]}>
              <Ionicons name="document-text" size={20} color="white" />
            </View>
            <Text style={styles.actionText}>Payment In</Text>
          </View>
          <TouchableOpacity style={styles.loanButton}>
            <Text style={styles.loanText}>Get Loan upto ₹1 Lakh</Text>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </View> */}

        {/* <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.activeTabText}>Customers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Suppliers</Text>
          </TouchableOpacity>
        </View> */}

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
          {customers.map((customer, index) => (
            <Link
              key={index}
              href={{
                pathname: "/user_details/[id]",
                params: { id: index },
              }}
            >
              <View key={customer.id} style={styles.customerItem}>
                <View style={styles.customerInfo}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>{customer.id}</Text>
                  </View>
                  <View>
                    <Text style={styles.customerName}>{customer.name}</Text>
                    {customer.dueDate && (
                      <Text style={styles.dueDate}>
                        Due in {customer.dueDate}
                      </Text>
                    )}
                    {customer.reminderDate && (
                      <Text style={styles.dueDate}>
                        {customer.reminderDate}
                      </Text>
                    )}
                    {customer.lastAction && (
                      <Text style={styles.dueDate}>{customer.lastAction}</Text>
                    )}
                  </View>
                </View>
                <View style={styles.amountContainer}>
                  <Text style={styles.amount}>₹{customer.amount}</Text>
                  <TouchableOpacity style={styles.requestButton}>
                    <Text style={styles.requestText}>REQUEST</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Link>
          ))}
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
const SettingsScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Settings Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Profile Screen</Text>
  </View>
);

const Dashboard = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="index"
        component={CustomersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

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
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
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

export default Dashboard;
