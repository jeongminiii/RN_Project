import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../style/MainStyle";

const Menu = () => {
  // Your Menu component logic here
};

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

const Notice = () => {
  // Your Notice component logic here
};

const ButtonBox = () => {
  // Your ButtonBox component logic here
};

const Community = () => {
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
          source={require("../images/community.png")}
          style={{ width: 350, height: 200 }}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        onPress={Notice}
        style={{ ...styles.Notice, flexDirection: "row" }}
      >
        <Icon name="notifications" size={20} color="#2e4b8f" />
        <Text>궁금한게 있다면 챗봇에게 물어보세요.</Text>
      </TouchableOpacity>

      <View style={styles.Row}>
        <Text style={styles.TextBox}>
          @@님과 비슷한{"\n"}고민을 가진 분들이에요!
        </Text>
        <TouchableOpacity onPress={ButtonBox} style={styles}>
          <Text style={styles.In}>게시물 더보기⮕ </Text>
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
    </View>
  );
};

export default Community;
