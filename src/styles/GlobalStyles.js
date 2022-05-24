import { StyleSheet } from "react-native";
import { colors } from "./Colors";

export const Styles = StyleSheet.create({
   // Button
   btnGreen: {
      width: 62,
      height: 62,
      borderRadius: 12,
      backgroundColor: colors.green,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
   },
   btnDark: {
      width: 62,
      height: 62,
      borderRadius: 12,
      backgroundColor: colors.btnDark,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
   },
   btnLight: {
      width: 62,
      height: 62,
      borderRadius: 12,
      backgroundColor: colors.white,
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
   },
   btnOperation: {
      width: 62,
      height: 62,
      borderRadius: 12,
      backgroundColor: "rgb(167, 243, 208)",
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
   },
   btnOperationDark: {
      width: 62,
      height: 62,
      borderRadius: 12,
      backgroundColor: "rgba(5, 150, 105,0.4)",
      justifyContent: "center",
      alignItems: "center",
      margin: 8,
   },
   smallTextLight: { fontSize: 32, color: colors.white },
   smallTextDark: { fontSize: 32, color: colors.green },
   smallTextDelete: { fontSize: 32, color: colors.red },
   smallTextClear: { fontSize: 32, color: colors.yellow },
   smallTextGreen: { fontSize: 32, color: colors.green },
   row: {
      maxWidth: "100%",
      flexDirection: "row",
   },
   screenFirstNumber: {
      fontSize: 55,
      color: colors.dark,
      fontWeight: "400",
      alignSelf: "flex-end",
   },
   screenSecondNumber: {
      fontSize: 35,
      color: colors.gray,
      fontWeight: "300",
      alignSelf: "flex-end",
   },
});
