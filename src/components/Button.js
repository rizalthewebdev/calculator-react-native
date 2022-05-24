import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

const Button = ({
   title,
   onPress,
   isGreen,
   isOperation,
   deleteBtn,
   clearBtn,
}) => {
   const theme = useContext(ThemeContext);
   return (
      <TouchableOpacity
         style={
            isGreen
               ? Styles.btnGreen
               : isOperation && theme !== "dark"
               ? Styles.btnOperation
               : isOperation && theme === "dark"
               ? Styles.btnOperationDark
               : theme === "light"
               ? Styles.btnLight
               : Styles.btnDark
         }
         onPress={onPress}
      >
         <Text
            style={
               isGreen
                  ? Styles.smallTextLight
                  : deleteBtn
                  ? Styles.smallTextDelete
                  : clearBtn
                  ? Styles.smallTextClear
                  : isOperation && theme === "dark"
                  ? Styles.smallTextGreen
                  : theme === "dark"
                  ? Styles.smallTextLight
                  : Styles.smallTextDark
            }
         >
            {title}
         </Text>
      </TouchableOpacity>
   );
};

export default Button;
