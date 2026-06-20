import { Text, View, StyleSheet, Pressable } from "react-native";

export default function Index() {
  const handlePress = () => {
    alert("Button pressed!"); // Action when clicked
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.text}>Changes you make will automatically reload.</Text>
      
      {/* Interactive Button */}
      <Pressable 
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed // Visual feedback on click
        ]}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </View>
  );
}

// Kept styles organized in a dedicated StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#007AFF", // System blue color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonPressed: {
    opacity: 0.7, // Dims button slightly when pressed
    transform: [{ scale: 0.98 }], // Micro-interaction shrink
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
