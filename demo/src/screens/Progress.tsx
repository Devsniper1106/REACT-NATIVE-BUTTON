import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ThemedButton } from 'react-native-really-awesome-button';
import Container from '../components/Container';
import Section from '../components/Section';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Progress({ navigation }: any) {
  const handleTimeout = (next: any) => setTimeout(next, 1000);
  const theme = 'bojack';

  useEffect(() => {
    navigation.setOptions({
      title: 'Progress Buttons',
      headerStyle: {
        backgroundColor: '#4f6fc4',
      },
      headerTintColor: '#FFF',
    });
  }, []);

  return (
    <Container>
      <Section title="Labeled Buttons">
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          width={200}
        >
          Progress
        </ThemedButton>
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          width={200}
          progressLoadingTime={6000}
        >
          Slower
        </ThemedButton>
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          width={200}
          backgroundActive="rgba(0,0,0,0)"
          backgroundProgress="rgba(0,0,0,0)"
        >
          No Bar
        </ThemedButton>
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          raiseLevel={0}
          borderRadius={0}
          width={200}
        >
          Flat Progress
        </ThemedButton>
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          raiseLevel={6}
          borderRadius={60}
          size="icon"
        >
          <MaterialCommunityIcons name="send" size={24} color="#FFFFFF" />
        </ThemedButton>
        <ThemedButton
          name={theme}
          style={styles.button}
          progress
          onPress={handleTimeout}
          type="primary"
          raiseLevel={0}
          borderRadius={60}
          size="icon"
        >
          <MaterialCommunityIcons name="facebook" size={24} color="#FFFFFF" />
        </ThemedButton>
      </Section>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    marginBottom: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  iconLeft: { marginRight: 8 },
});
