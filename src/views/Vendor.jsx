import { TouchableOpacity } from "react-native";
import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import { SvgUri, SvgXml } from "react-native-svg";
import { xml } from "../logos/vendorLogo";

const Vendor = (props) => {
  const goToSignUP = () => {
    props.navigation.navigate("Sign Up");
  };
  return (
    <SafeAreaView style={styles.view}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.logInButton}>
          <Text style={styles.logInButton.text}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.signUpInfo}>
          <SvgXml width="100%" height="100" xml={xml} style={styles.logo} />
          <View style={styles.signUpInfo.bulletPoints}>
            <Text>- Reach a wide audience of corn enthusiiasts</Text>
            <Text>- Showcase your delicious Mexican street corn</Text>
            <Text>-Increase your sales and grow your business</Text>
          </View>
          <TouchableOpacity
            style={styles.signUpInfo.button}
            onPress={goToSignUP}
          >
            <Text style={styles.signUpInfo.button.text}>SIGN UP NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 14,
  },
  logInButton: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 9,
    color: "white",
    backgroundColor: "blue",
    color: "white",
    borderRadius: 4,
    text: {
      color: "white",
      fontWeight: 700,
    },
  },
  signUpInfo: {
    overflow: "hidden",
    marginTop: 20,
    borderWidth: 1.1,
    borderColor: "gray",
    borderRadius: 4,
    bulletPoints: {
      padding: 8,
      paddingLeft: 20,
      backgroundColor: "white",
      borderBottomWidth: 1,
      borderColor: "gray",
    },
    button: {
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 9,
      borderColor: "gray",
      backgroundColor: "white",
      text: {
        fontWeight: 600,
        color: "blue",
      },
    },
  },
  logo: {
    backgroundColor: "white",
  },
});

export default Vendor;
