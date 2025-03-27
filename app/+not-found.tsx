import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import globalStyles from '@/styles/global.styles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Oops!',
          headerBackTitle: 'Back',
          headerTintColor: 'white',
        }}
      />
      <View style={globalStyles.container}>
        <Text style={globalStyles.primaryText}>This screen doesn't exist.</Text>
        <Link href='/' style={styles.link}>
          <Text
            style={{
              ...globalStyles.secondaryText,
              textDecorationLine: 'underline',
            }}
          >
            Go to home screen!
          </Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
