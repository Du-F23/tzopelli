import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";

export default function ProductDescription({ route, navigation }) {
  const { product } = route.params;
  //   console.log(product);
  const [cart, setCart] = useState([]);

  const Helados = [
    {
      id: 1,
      title: "Helado de Chocolate",
      description: "Helado de chocolate con trozos de chocolate",
      price: 10,
    },
    {
      id: 2,
      title: "Helado de Fresa",
      description: "Helado de fresa con trozos de fresa",
      price: 10,
    },
    {
      id: 3,
      title: "Helado de Vainilla",
      description: "Helado de vainilla con trozos de vainilla",
      price: 10,
    },
    {
      id: 4,
      title: "Helado de Menta",
      description: "Helado de menta con trozos de menta",
      price: 10,
    },
  ];

  const Dulces = [
    {
      id: 1,
      title: "Dulce de Leche",
      description: "Dulce de leche con trozos de chocolate",
      price: 10,
    },
    {
      id: 2,
      title: "Dulce de Fresa",
      description: "Dulce de fresa con trozos de fresa",
      price: 10,
    },
    {
      id: 3,
      title: "Dulce de Vainilla",
      description: "Dulce de vainilla con trozos de vainilla",
      price: 10,
    },
    {
      id: 4,
      title: "Dulce de Menta",
      description: "Dulce de menta con trozos de menta",
      price: 10,
    },
  ];

  const Artesanias = [
    {
      id: 1,
      title: "Alebriges",
      description: "Alebriges hecho a mano",
      price: 200,
    },
    {
      id: 2,
      title: "Cajas",
      description: "Cajas de madera",
      price: 200,
    },
    {
      id: 3,
      title: "Candelabros",
      description: "Candelabros de madera",
      price: 200,
    },
    {
      id: 4,
      title: "Carpinteria",
      description: "Carpinteria de madera",
      price: 200,
    },
  ];

  const Galeria = [
    {
      id: 1,
      title: "Pintura",
      description: "Pintura de madera",
      price: 200,
    },
    {
      id: 2,
      title: "Escultura",
      description: "Escultura de madera",
      price: 200,
    },
    {
      id: 3,
      title: "Dibujo",
      description: "Dibujo de madera",
      price: 200,
    },
    {
      id: 4,
      title: "Fotografia",
      description: "Fotografia de madera",
      price: 200,
    },
  ];

  useEffect(() => {
    const getCart = async () => {
      const cart = await AsyncStorage.getItem("cart");
      if (cart) {
        setCart(JSON.parse(cart));
      }
    };
    getCart();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../img/Detalle.jpeg")}
        style={styles.image}
      >
        <View style={styles.header}>
          <ImageBackground
            source={require("../img/Fondo_titulo.png")}
            style={styles.logo}
          >
            <Text style={styles.titleHeader}>{product.title}</Text>
          </ImageBackground>
        </View>
        {product.id === 1
          ? Helados.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : product.id === 2
          ? Dulces.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : product.id === 3
          ? Artesanias.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))
          : Galeria.map((product) => (
              <View style={styles.product} key={product.id}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>${product.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    const setDataCart = async () => {
                      try {
                        const jsonValue = JSON.stringify(product);
                        setCart(jsonValue);
                        await AsyncStorage.setItem("cart", jsonValue);
                      } catch (e) {
                        console.log(e);
                      }
                    };
                    setDataCart();
                    navigation.navigate("CartScreen");
                  }}
                >
                  <Text style={styles.buttonText}>Agregar</Text>
                  <Icon name="ios-cart" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            ))}
      </ImageBackground>
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
    flexDirection: "row",
    flexWrap: "wrap",
    resizeMode: "cover",
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    width: "100%",
    height: "100%",
  },
  product: {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
  },
  price: {
    fontSize: 15,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffbf00",
    width: 100,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  header: {
    flexDirection: "row",
    zIndex: 1,
  },
  logo: {
    width: Dimensions.get("window").width - 80,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  titleHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: 10,
    zIndex: 1,
  },
});
