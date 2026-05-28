import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ─── Stack Navigator Setup ───────────────────────────────────────────────────
// This is a SECOND independent stack — separate from the one in index.tsx.
// Each tab has its own stack, and NavigationIndependentTree keeps them isolated.
const Stack = createStackNavigator();

// ─── Cart Screen ─────────────────────────────────────────────────────────────
function CartScreen({ navigation }: any) {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: styles.title }, '🛒 Cart Screen'),
    React.createElement(
      TouchableOpacity,
      {
        style: styles.button,
        onPress: () => navigation.navigate('OrderSummary'),
      },
      React.createElement(Text, { style: styles.buttonText }, 'View Order Summary')
    )
  );
}

// ─── Order Summary Screen ─────────────────────────────────────────────────────
function OrderSummaryScreen({ navigation }: any) {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Text, { style: styles.title }, '📋 Order Summary'),
    React.createElement(
      TouchableOpacity,
      {
        style: styles.button,
        onPress: () => navigation.goBack(),
      },
      React.createElement(Text, { style: styles.buttonText }, '← Back to Cart')
    )
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
// NavigationIndependentTree isolates this stack from the one in index.tsx.
// Both tabs have their own stack — they do not share or interfere with each other.
export default function App() {
  return (
    <NavigationIndependentTree>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#1A4D2E' },
          headerTintColor: '#F5F5F5',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: '🛒 My Cart' }}
        />
        <Stack.Screen
          name="OrderSummary"
          component={OrderSummaryScreen}
          options={{ title: 'Order Summary', headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#1A4D2E',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
