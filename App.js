import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {BottomNavigation} from 'react-native-material-ui'

export default function App() {
  return (
      <View style={styles.container}>
        <BottomNavigation style={styles.bottomTabBar}>
          <BottomNavigation.Action
              key="home"
              icon="home"
              label="홈"
          />
          <BottomNavigation.Action
              key="category"
              icon="category"
              label="카테고리"
          />
          <BottomNavigation.Action
              key="chat"
              icon="chat"
              label="채팅"
          />
          <BottomNavigation.Action
              key="settings"
              icon="settings"
              label="설정"
          />
        </BottomNavigation>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  bottomTabBar: {
    marginBottom:30,
  }
});
