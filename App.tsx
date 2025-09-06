import React from "react";
import { SafeAreaView } from "react-native";
import ApplicationWizard from "./src/screens/ApplicationWizard";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ApplicationWizard />
    </SafeAreaView>
  );
}
