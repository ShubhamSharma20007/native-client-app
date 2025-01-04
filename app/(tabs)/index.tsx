import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

interface Customer {
  id: string;
  name: string;
  amount: number;
  dueDate?: string;
  reminderDate?: string;
  lastAction?: string;
}

const CustomersScreen = ({ navigation }) => {
  const customers: Customer[] = [
    { id: "IS", name: "Ishan Sharma", amount: 4567, dueDate: "20 Sep 2023" },
    { id: "RV", name: "Raaghav Verma", amount: 47, dueDate: "12 days" },
    {
      id: "V",
      name: "Virat",
      amount: 1102,
      reminderDate: "Reminder sent today",
    },
    { id: "VK", name: "Vyom Kushwaha", amount: 190, lastAction: "4 days ago" },
    { id: "K", name: "Karttikeya", amount: 0, dueDate: "Today" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.storePicker}>
          <Text style={styles.storeText}>Ekta Stores</Text>
          <Ionicons name="chevron-down" size={20} color="white" />
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.staffText}>Staff</Text>
        </TouchableOpacity>
      </View>

      {/* Rest of your existing code */}
      <View style={styles.actionButtons}>
        <View style={styles.actionItem}>
          <View style={[styles.actionIcon, { backgroundColor: "#FF5757" }]}>
            <Text style={styles.iconText}>₹</Text>
          </View>
          <Text style={styles.actionText}>Send Money</Text>
        </View>
        <View style={styles.actionItem}>
          <View style={[styles.actionIcon, { backgroundColor: "#4CAF50" }]}>
            <Ionicons name="document-text" size={20} color="white" />
          </View>
          <Text style={styles.actionText}>Payment History</Text>
        </View>
        <TouchableOpacity style={styles.loanButton}>
          <Text style={styles.loanText}>Get Loan upto ₹1 Lakh</Text>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.activeTabText}>Customers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Suppliers</Text>
        </TouchableOpacity>
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
        {customers.map((customer) => (
          <View key={customer.id} style={styles.customerItem}>
            <View style={styles.customerInfo}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{customer.id}</Text>
              </View>
              <View>
                <Text style={styles.customerName}>{customer.name}</Text>
                {customer.dueDate && (
                  <Text style={styles.dueDate}>Due in {customer.dueDate}</Text>
                )}
                {customer.reminderDate && (
                  <Text style={styles.dueDate}>{customer.reminderDate}</Text>
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
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>ADD CUSTOMER</Text>
      </TouchableOpacity>
    </View>
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

const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Customers"
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
    backgroundColor: "#1a237e",
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  storePicker: {
    flexDirection: "row",
    alignItems: "center",
  },
  storeText: {
    color: "white",
    fontSize: 18,
    marginRight: 8,
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

export default App;
