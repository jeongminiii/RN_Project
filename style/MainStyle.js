import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f3f8",
    paddingHorizontal: 20,
  },
  header: {
    //backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 10, //상단바 없애면 50으로 해야함.
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    marginRight: 90,
    //backgroundColor: "orange",
  },
  MenuSt: {
    fontSize: 35,
    color: "black",
  },
  Notice: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 30,
  },
  Row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  TextBox: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e4b8f",
    padding: 5,

    //backgroundColor: "orange",
  },
  In: { fontWeight: "bold" },
  btnST: {
    shadowColor: "#000000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },

    margin: 3,
  },
  btnText: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
});
