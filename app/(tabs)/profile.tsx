// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function ItemsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Business</Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, styles.activeTab]}>PRODUCTS</Text>
        <Text style={styles.tabText}>SERVICES</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOS8IRAUoWF81zCwaP2kTfZW_lnTXsIejZ8w&s",
          }}
          style={styles.illustration}
        />
        <Text style={styles.contentTitle}>Add Items And Get Started</Text>

        <View style={styles.featureList}>
          <FeatureItem
            icon="add-circle-outline"
            text="Manage stock in/out & get low stock alerts"
          />
          <FeatureItem
            icon="document-text-outline"
            text="Detailed stock history with notes"
          />
          <FeatureItem
            icon="stats-chart-outline"
            text="Track purchase/sale price & profits"
          />
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
          <Text style={styles.buttonText}>ADD PRODUCT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const FeatureItem = ({ icon: string, text }: { icon: any; text: string }) => (
  <View style={styles.featureItem}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={24} color="#0066CC" />
    </View>
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

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
    backgroundColor: "#0066CC",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  tabText: {
    flex: 1,
    textAlign: "center",
    padding: 16,
    color: "#666",
  },
  activeTab: {
    color: "#0066CC",
    borderBottomWidth: 2,
    borderBottomColor: "#0066CC",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  illustration: {
    width: 200,
    height: 200,
    marginBottom: 24,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 32,
  },
  featureList: {
    width: "100%",
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    backgroundColor: "#E3F2FD",
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  featureText: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  addButton: {
    flexDirection: "row",
    backgroundColor: "#0066CC",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});
