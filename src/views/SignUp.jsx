import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import { Image } from "react-native";
import DatePicker from "react-native-datepicker";
import { createAccount } from "../network/users";
import snakeCasify from "../helpers/snakeCasify";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { AuthContext } from "../context/AuthContext";

const SignUp = ({ navigation }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    birthdate: "09-10-2020",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    });
  }, [navigation]);

  const { register } = useContext(AuthContext);

  const handleOnChangeText = (text, name) => {
    setNewUser({ ...newUser, [name]: text });
  };

  const handleSubmit = () => {
    const payload = snakeCasify({ user: newUser });
    register(payload);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.credentials}
          placeholder="First Name"
          value={newUser.firstName}
          onChangeText={(text) => {
            handleOnChangeText(text, "firstName");
          }}
        />
        <TextInput
          style={styles.credentials}
          placeholder="Last Name"
          value={newUser.lastName}
          onChangeText={(text) => {
            handleOnChangeText(text, "lastName");
          }}
        />
        <DatePicker
          date={newUser.birthdate} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2019"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            handleOnChangeText(date, "birthdate");
          }}
        />
        <TextInput
          style={styles.credentials}
          placeholder="Email"
          value={newUser.email}
          onChangeText={(text) => {
            handleOnChangeText(text, "email");
          }}
        />
        <TextInput
          style={styles.credentials}
          placeholder="Password"
          value={newUser.password}
          onChangeText={(text) => {
            handleOnChangeText(text, "password");
          }}
          secureTextEntry={true}
          textContentType={"oneTimeCode"}
        />
        <TextInput
          style={styles.credentials}
          placeholder="Confirm Password"
          value={newUser.passwordConfirmation}
          onChangeText={(text) => {
            handleOnChangeText(text, "passwordConfirmation");
          }}
          secureTextEntry={true}
          textContentType={"oneTimeCode"}
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  content: {
    flex: 1,
    alignItems: "center",
  },
  credentials: {
    width: 150,
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
  },
});

export default SignUp;
