import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
import { ThemeContext } from "./src/context/ThemeContext";
import { colors } from "./src/styles/Colors";
import Keyboard from "./src/components/Keyboard";
import { SafeAreaView } from "react-native-web";

export default function App() {
   const [theme, setTheme] = useState("light");
   return (
      <ThemeContext.Provider value={theme}>
         <View
            style={
               theme === "light"
                  ? styles.container
                  : [styles.container, { backgroundColor: "#000" }]
            }
         >
            <StatusBar style="auto" />
            <View style={styles.innerContainer}>
               <Switch
                  value={theme === "dark"}
                  onValueChange={() =>
                     setTheme(theme === "light" ? "dark" : "light")
                  }
               />
               <Keyboard />
            </View>
         </View>
      </ThemeContext.Provider>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: colors.light,
      alignItems: "center",
      justifyContent: "center",
   },
   innerContainer: {
      height: "90%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
   },
});
