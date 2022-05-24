import { useState } from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { colors } from "../styles/Colors";

export default function Keyboard() {
   const [firstNumber, setFirstNumber] = useState("");
   const [secondNumber, setSecondNumber] = useState("");
   const [operation, setOperation] = useState("");
   const [result, setResult] = useState(null);

   // When typing Numbers key
   const handleNumberPress = (buttonValue) => {
      if (firstNumber.length < 10) {
         setFirstNumber(firstNumber + buttonValue);
      }
   };

   // when zero key press
   const handleZeroPress = (value) => {
      if (!firstNumber) {
         return;
      }
      setFirstNumber(firstNumber + value);
   };

   // When typing operation key
   const handleOperationPress = (buttonValue) => {
      if (!firstNumber) {
         return;
      }
      setOperation(buttonValue);
      setSecondNumber(firstNumber);
      setFirstNumber("");
   };

   // Clear Input
   const clear = () => {
      setFirstNumber("");
      setSecondNumber("");
      setOperation("");
      setResult(null);
   };

   const handleEqualSign = () => {};

   // When = press
   const getResult = () => {
      switch (operation) {
         case "+":
            setResult(parseInt(secondNumber) + parseInt(firstNumber));
            break;
         case "-":
            setResult(parseInt(secondNumber) - parseInt(firstNumber));
            break;
         case "*":
            setResult(parseInt(secondNumber) * parseInt(firstNumber));
            break;
         case "/":
            setResult(parseInt(secondNumber) / parseInt(firstNumber));
            break;
         case "%":
            setResult(parseInt(secondNumber) % parseInt(firstNumber));
            break;
         default:
            setResult(0);
            break;
      }
   };

   // Show number
   const numberDisplay = () => {
      if (result !== null) {
         return (
            <Text
               style={
                  result < 9999
                     ? [Styles.screenFirstNumber, { color: colors.black }]
                     : [
                          Styles.screenFirstNumber,
                          { fontSize: 45, color: colors.black },
                       ]
               }
            >
               {`=${result.toString()}`}
            </Text>
         );
      }
      if (firstNumber && firstNumber.length < 6) {
         return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
      }
      if (firstNumber === "") {
         return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
      }
      if (firstNumber.length > 5 && firstNumber.length < 8) {
         return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 40 }]}>
               {firstNumber}
            </Text>
         );
      }

      if (firstNumber.length > 11) {
         return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 25 }]}>
               {firstNumber}
            </Text>
         );
      }
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
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "100%"
               }}
            >
               <Text style={Styles.screenSecondNumber}>{secondNumber}</Text>
               <Text style={{ color: "green", fontSize: 30 }}>{operation}</Text>
            </View>
            {numberDisplay()}
         </View>
         <View style={Styles.row}>
            <Button
               title="AC"
               onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
               deleteBtn
            />
            <Button title="C" clearBtn onPress={clear} />
            <Button
               title="%"
               isOperation
               onPress={() => handleOperationPress("%")}
            />
            <Button
               title="/"
               isOperation
               onPress={() => handleOperationPress("/")}
            />
         </View>
         <View style={Styles.row}>
            <Button title="7" onPress={() => handleNumberPress("7")} />
            <Button title="8" onPress={() => handleNumberPress("8")} />
            <Button title="9" onPress={() => handleNumberPress("9")} />
            <Button
               title="*"
               isOperation
               onPress={() => handleOperationPress("*")}
            />
         </View>
         <View style={Styles.row}>
            <Button title="4" onPress={() => handleNumberPress("4")} />
            <Button title="5" onPress={() => handleNumberPress("5")} />
            <Button title="6" onPress={() => handleNumberPress("6")} />
            <Button
               title="-"
               isOperation
               onPress={() => handleOperationPress("-")}
            />
         </View>
         <View style={Styles.row}>
            <Button title="1" onPress={() => handleNumberPress("1")} />
            <Button title="2" onPress={() => handleNumberPress("2")} />
            <Button title="3" onPress={() => handleNumberPress("3")} />
            <Button
               title="+"
               isOperation
               onPress={() => handleOperationPress("+")}
            />
         </View>
         <View style={Styles.row}>
            <Button title="00" onPress={() => handleZeroPress("00")} />
            <Button title="0" onPress={() => handleZeroPress("0")} />
            <Button title="." onPress={() => handleNumberPress(".")} />
            <Button title="=" isGreen onPress={getResult} />
         </View>
      </View>
   );
}
