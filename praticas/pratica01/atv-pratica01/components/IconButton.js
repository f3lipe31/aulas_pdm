import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones do Expo

function IconButton({ icon, size, color, onPress }) {
  return (
    <Pressable 
      onPress={onPress} 
      style={({ pressed }) => pressed && styles.pressed} // Aplica opacidade ao clicar
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

export default IconButton; // <-- Essencial para o App.js conseguir ler

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75, // Efeito de clique (fade)
  },
});