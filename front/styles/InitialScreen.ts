import { Dimensions, StyleSheet } from "react-native";
import colorPalette from "../assets/colorPalette";

const { height, width } = Dimensions.get("window");

const initialScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", //coloca todos os itens na parte de baixo da tela
  },
  button: {
    backgroundColor: colorPalette.backgroundPrimary,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  bottonContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: colorPalette.backgroundPrimary,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: colorPalette.backgroundPrimary,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 70,
    // ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    elevation: -3,
    justifyContent: "center",
    position: "relative",
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 3.05,
    elevation: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    top: -20,
  },
});

export { initialScreenStyles as styles };
