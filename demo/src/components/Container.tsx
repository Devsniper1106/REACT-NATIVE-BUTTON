import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export default function Container({ children }: any) {
  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollView}>{children}</ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: 'center',
    flexDirection: 'column',
  },
});
