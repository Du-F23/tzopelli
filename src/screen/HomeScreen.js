import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Home.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffbf00",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
