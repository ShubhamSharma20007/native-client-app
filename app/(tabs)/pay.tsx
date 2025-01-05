// App.tsx
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";

type Transaction = {
  id: string;
  time: string;
  amount: number;
  type: "IN" | "OUT";
  description: string;
  paymentMode: "CASH" | "CARD" | "UPI";
};

const initialTransactions: Transaction[] = [
  {
    id: "1",
    time: "05:33 PM",
    amount: 234,
    type: "IN",
    description: "sdfhasjdf",
    paymentMode: "CASH",
  },
  {
    id: "2",
    time: "05:33 PM",
    amount: 234,
    type: "IN",
    description: "sdfhasjdf",
    paymentMode: "CASH",
  },
  {
    id: "3",
    time: "05:33 PM",
    amount: 234,
    type: "IN",
    description: "sdfhasjdf",
    paymentMode: "CASH",
  },
  {
    id: "4",
    time: "05:33 PM",
    amount: 234,
    type: "IN",
    description: "sdfhasjdf",
    paymentMode: "CASH",
  },
];

export default function Pay() {
  const [date, setDate] = useState(new Date());
  const [paymentMode, setPaymentMode] = useState<string>("All");
  const [transactions] = useState<Transaction[]>(initialTransactions);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>My Business</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Balance Section */}
      <View style={styles.balanceContainer}>
        <View>
          <Text style={styles.balanceLabel}>Total Balance</Text>
          <Text style={styles.balanceAmount}>₹234</Text>
        </View>
        <View>
          <Text style={styles.balanceLabel}>Today's Balance</Text>
          <Text style={styles.balanceAmount}>₹234</Text>
        </View>
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>View Report</Text>
        </TouchableOpacity>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.dateButton}>
          <Text>Date: {formatDate(date)}</Text>
        </TouchableOpacity>

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={paymentMode}
            onValueChange={(itemValue) => setPaymentMode(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="All" value="All" />
            <Picker.Item label="Cash" value="CASH" />
            <Picker.Item label="Card" value="CARD" />
            <Picker.Item label="UPI" value="UPI" />
          </Picker>
        </View>
      </View>

      {/* Transactions List */}
      <ScrollView style={styles.transactionsList}>
        <View style={styles.listHeader}>
          <Text style={styles.listHeaderText}>NAME</Text>
          <View style={styles.amountHeader}>
            <Text style={styles.listHeaderText}>OUT</Text>
            <Text style={styles.listHeaderText}>IN</Text>
          </View>
        </View>

        <Text style={styles.dateHeader}>04 Jan 2025 (TODAY)</Text>
        <Text style={styles.entriesCount}>1 Entries</Text>

        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{transaction.time}</Text>
              <View style={styles.paymentModeTag}>
                <Text style={styles.paymentModeText}>
                  {transaction.paymentMode}
                </Text>
              </View>
            </View>
            <View style={styles.amountContainer}>
              <Text style={styles.outAmount}>-</Text>
              <Text style={styles.inAmount}>₹{transaction.amount}</Text>
            </View>
            <Text style={styles.description}>
              Description: {transaction.description}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  balanceLabel: {
    color: "#666",
    fontSize: 14,
  },
  balanceAmount: {
    color: "#22c55e",
    fontSize: 16,
    fontWeight: "bold",
  },
  reportButton: {
    backgroundColor: "#e6f0ff",
    padding: 8,
    borderRadius: 6,
  },
  reportButtonText: {
    color: "#3b82f6",
  },
  filtersContainer: {
    padding: 16,
    flexDirection: "row",
    gap: 12,
  },
  dateButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 6,
    justifyContent: "center",
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e5e5e5",
    borderRadius: 6,

    fontSize: 16,
  },

  transactionsList: {
    flex: 1,
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    paddingBottom: 8,
  },
  listHeaderText: {
    color: "#666",
    fontSize: 14,
  },
  amountHeader: {
    flexDirection: "row",
    gap: 32,
  },
  dateHeader: {
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 16,
  },
  entriesCount: {
    fontSize: 12,
    color: "#666",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  transactionItem: {
    padding: 16,
    boxShadow: "0px 0px 0px 2px rgba(0,0,0,0.1)",
    margin: 10,
    borderRadius: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 4,
  },
  timeText: {
    fontSize: 14,
  },
  paymentModeTag: {
    backgroundColor: "#e6f0ff",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  paymentModeText: {
    color: "#3b82f6",
    fontSize: 12,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 32,
  },
  outAmount: {
    color: "#ef4444",
    fontSize: 16,
  },
  inAmount: {
    color: "#22c55e",
    fontSize: 16,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
