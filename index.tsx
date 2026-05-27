import { View, Text, FlatList, StyleSheet } from 'react-native';

const menuItems = [
    { id: '1', category: 'Hot Drinks', name: 'Cafe Latte' },
    { id: '2', category: 'Hot Drinks', name: 'Cappuccino' },
    { id: '3', category: 'Hot Drinks', name: 'Espresso' },
    { id: '4', category: 'Cold Drinks', name: 'Iced Latte' },  
    { id: '5', category: 'Cold Drinks', name: 'Spanish Latte' },
];

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Coffee Shop Menu</Text>
            <FlatList
                data={menuItems}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.category}>{item.category}</Text>
                        <Text style={styles.name}>{item.name}</Text>
                    </View> 
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    heading: { fontSize: 24, marginBottom: 20 },
    item: { marginBottom: 15 },
    category: { fontSize: 18, fontWeight: 'bold' },
    name: { fontSize: 16 },
}); 
