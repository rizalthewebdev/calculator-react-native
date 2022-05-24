import { useState } from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { colors } from "../styles/Colors";

export default function Keyboard() {
   const [calc, setCalc] = useState("");
   const operation = ["-", "+", "/", "*", "%", "."];
   const [result, setResult] = useState("");

   // Add number and operation
   const updateCalc = (value) => {
      if (
         (operation.includes(value) && calc === "") ||
         (operation.includes(value) && operation.includes(calc.slice(-1)))
      ) {
         return;
      }
      setCalc(calc + value);

      if (!operation.includes(value)) {
         setResult(eval(calc + value).toString());
      }
   };

   // when zero key press
   const handleZeroPress = (value) => {
      if (!calc) {
         return;
      }
      setCalc(calc + value);
   };

   // Clear Input
   const clear = () => {
      setCalc("");
      setResult("");
   };
   const getResult = () => {
      setCalc(eval(calc).toString());
   };

   return (
      <View
         style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <View
            style={{
               height: "55%",
               width: "90%",
               marginTop: -75,
               justifyContent: "center",
               alignSelf: "flex-end",
               alignItems: "baseline",
            }}
         >
            <View
               style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  width: "100%",
               }}
            >
               <Text style={Styles.screenSecondNumber}>{calc}</Text>
               <Text style={Styles.screenFirstNumber}>
                  {result ? `=${result}` : 0}
               </Text>
            </View>
         </View>
         <View style={Styles.row}>
            <Button
               title="AC"
               onPress={() => setCalc(calc.slice(0, -1))}
               deleteBtn
            />
            <Button title="C" clearBtn onPress={clear} />
            <Button title="%" isOperation onPress={() => updateCalc("%")} />
            <Button title="/" isOperation onPress={() => updateCalc("/")} />
         </View>
         <View style={Styles.row}>
            <Button title="7" onPress={() => updateCalc("7")} />
            <Button title="8" onPress={() => updateCalc("8")} />
            <Button title="9" onPress={() => updateCalc("9")} />
            <Button title="*" isOperation onPress={() => updateCalc("*")} />
         </View>
         <View style={Styles.row}>
            <Button title="4" onPress={() => updateCalc("4")} />
            <Button title="5" onPress={() => updateCalc("5")} />
            <Button title="6" onPress={() => updateCalc("6")} />
            <Button title="-" isOperation onPress={() => updateCalc("-")} />
         </View>
         <View style={Styles.row}>
            <Button title="1" onPress={() => updateCalc("1")} />
            <Button title="2" onPress={() => updateCalc("2")} />
            <Button title="3" onPress={() => updateCalc("3")} />
            <Button title="+" isOperation onPress={() => updateCalc("+")} />
         </View>
         <View style={Styles.row}>
            <Button title="00" onPress={() => handleZeroPress("00")} />
            <Button title="0" onPress={() => handleZeroPress("0")} />
            <Button title="." onPress={() => updateCalc(".")} />
            <Button title="=" isGreen onPress={getResult} />
         </View>
      </View>
   );
}
