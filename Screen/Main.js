import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "../style/MainStyle";
import { useNavigation } from "@react-navigation/native";

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

// const Notice = () => {
//   // Your Notice component logic here 공지 누르면 이동하는거 일단 보류
// };

const ButtonBox = () => {
  // Your ButtonBox component logic here
};

const Main = () => {
  const navigation = useNavigation();

  const navigateNoticeDetail = () => {
    navigation.navigate("NoticeDetail"); // 정보 상세 내용 화면으로 이동
  };

  // 정책 더보기 버튼 클릭 시 호출되는 함수
  const navigateToPolicyDetail = () => {
    navigation.navigate("PolicyDetail"); // 정책 상세 내용 화면으로 이동
  };

  // 정보 더보기 버튼 클릭 시 호출되는 함수
  const navigateToInfoDetail = () => {
    navigation.navigate("InfoDetail"); // 정보 상세 내용 화면으로 이동
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>청년 독립 만세</Text>
        <TouchableOpacity onPress={Menu}>
          <Text style={styles.MenuSt}>☰</Text>
        </TouchableOpacity>
      </View>

      <SearchScreen />

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Image
          source={require("../images/cdm.jpg")}
          style={{ width: 350, height: 200 }}
          resizeMode="cover"
        />
      </View>

      <TouchableOpacity
        onPress={navigateNoticeDetail}
        style={{ ...styles.Notice, flexDirection: "row" }}
      >
        <Icon name="notifications" size={20} color="#2e4b8f" />
        <Text>오늘의 새로운 청년 주택 공고가 올라왔어요!</Text>
      </TouchableOpacity>

      <View style={styles.Row}>
        <Text style={styles.TextBox}>
          @@님을 위한{"\n"}맞춤 정책을 찾았어요
        </Text>
        <TouchableOpacity onPress={navigateToPolicyDetail} style={styles}>
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
        <TouchableOpacity onPress={navigateToInfoDetail} style={styles}>
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
};

export default Main;
