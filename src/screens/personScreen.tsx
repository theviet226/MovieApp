import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PersonScreen = ({ route }) => {
  const { person } = route.params;  // Lấy thông tin từ route params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Person: {person.name}</Text>
      {/* Hiển thị thông tin về người */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PersonScreen;  // Đảm bảo export đúng
