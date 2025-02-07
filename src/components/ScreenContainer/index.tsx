import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

// TODO: update this style

const ScreenContainer = ({
  children,
  keyboardAvoiding = true,
}: {
  children: React.ReactNode;
  keyboardAvoiding: boolean;
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    padding: 16,
  },
});

export default ScreenContainer;
