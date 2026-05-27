import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const menuItems = [
    { id: '1', category: 'Hot Drinks', name: 'Cafe Latte' },
    { id: '2', category: 'Hot Drinks', name: 'Cappuccino' },
    { id: '3', category: 'Hot Drinks', name: 'Espresso' },
    { id: '4', category: 'Cold Drinks', name: 'Iced Latte' },  
    { id: '5', category: 'Cold Drinks', name: 'Spanish Latte' },
    { id: '6', category: 'Non-Coffee Drinks', name: 'House Blend Tea' },
];

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Kape Menu</Text>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                        <TouchableOpacity onPress={() => console.log(item.name)}>
                            <Text style={styles.button}>View Item</Text>
                        </TouchableOpacity>
                    </View> 
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    item: { marginBottom: 12 },
    category: { fontSize: 12, fontFamily: 'Helvetica', color: '#422d04' },
    name: { fontSize: 18, fontFamily: 'Helvetica' },
    heading: { fontSize: 34, marginBottom: 20, fontFamily: 'Helvetica' },
    button: {
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: '#888',
      paddingVertical: 6,
      paddingHorizontal: 12,
      borderRadius: 4,
      marginTop: 4,
    },
    buttonText: {
      fontFamily: 'Helvetica',
      fontSize: 14,
      color: '#333',
    },
}); 
