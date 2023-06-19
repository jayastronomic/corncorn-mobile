import React, { useContext, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Button,
} from "react-native";
import snakeCasify from "../helpers/snakeCasify";
import { logIn } from "../network/users";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [authUser, setAuthUser] = useState({ email: "", password: "" });

  const handleOnChangeText = (text, name) => {
    setAuthUser({ ...authUser, [name]: text });
  };

  const handleSubmit = () => {
    const credentials = snakeCasify({ user: authUser });
    login(credentials);
  };

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.credentials}
          placeholder="Email"
          value={authUser.email}
          onChangeText={(text) => {
            handleOnChangeText(text, "email");
          }}
        />
        <TextInput
          style={styles.credentials}
          placeholder="Password"
          value={authUser.password}
          onChangeText={(text) => {
            handleOnChangeText(text, "password");
          }}
          secureTextEntry={true}
          textContentType={"oneTimeCode"}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
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

export default Login;
