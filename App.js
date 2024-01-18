import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "./MainStyle";
import Icon from "react-native-vector-icons/Ionicons";

export default function App() {
  const Menu = () => {};
  const SearchScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query) => setSearchQuery(query);

    return (
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ backgroundColor: "white" }}
      />
    );
  };

  const ButtonBox = () => {};

  const Notice = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>청년 독립 만세</Text>
        <TouchableOpacity onPress={Menu}>
          <Text style={styles.MenuSt}>☰</Text>
        </TouchableOpacity>
      </View>
      <SearchScreen />
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <Image
          source={require("../240119/cdm.jpg")}
          style={{ width: 350, height: 200 }}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity
        onPress={Notice}
        style={{ ...styles.Notice, flexDirection: "row" }}
      >
        <Icon name="notifications" size={20} color="#2e4b8f" />
        <Text style={styles.In}>알람창입니다</Text>
      </TouchableOpacity>
      <View style={styles.Row}>
        <Text style={styles.TextBox}>
          @@님을 위한{"\n"}맞춤 정책을 찾았어요
        </Text>
        <TouchableOpacity onPress={ButtonBox} style={styles}>
          <Text style={styles.In}>정책 더보기⮕ </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnST}>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>여기에는 박스가 들어갑니다</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnST}>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>여기에는 박스가 들어갑니다</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnST}>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>여기에는 박스가 들어갑니다</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Row}>
        <Text style={styles.TextBox}> 부동산 계약 관련 정보</Text>
        <TouchableOpacity onPress={ButtonBox} style={styles}>
          <Text style={styles.In}>정보 더보기⮕ </Text>
        </TouchableOpacity>
      </View>
      <View style={{ ...styles.btnST, flexDirection: "row" }}>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>박스</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>박스</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ButtonBox} style={styles.btnText}>
          <Text>박스</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
