// NoticeScreen.js
import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const notices = [
  {
    id: 1,
    title: "첫 번째 공지사항",
    content: "첫 번째 공지사항 내용입니다.",
    author: "관리자",
    date: "2024-02-29",
  },
  {
    id: 2,
    title: "두 번째 공지사항",
    content: "두 번째 공지사항 내용입니다.",
    author: "관리자",
    date: "2024-03-01",
  },
];

const NoticeDetailScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {notices.map((notice) => (
        <TouchableOpacity
          key={notice.id}
          style={styles.noticeItem}
          onPress={() =>
            navigation.navigate("NoticeDetail", {
              title: notice.title,
              content: notice.content,
              author: notice.author,
              date: notice.date,
            })
          }
        >
          <Text style={styles.title}>{notice.title}</Text>
          <Text style={styles.info}>
            작성자: {notice.author} | 날짜: {notice.date}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  noticeItem: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    color: "#666",
  },
});

export default NoticeDetailScreen;
