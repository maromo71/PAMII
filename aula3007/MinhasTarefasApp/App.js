import React from 'react';
import { Text, 
   View, 
   TextInput, 
   TouchableOpacity, 
   SafeAreaView, 
   Platform, 
   StatusBar } from 'react-native';
import styles from './styles'; 

function Header(props) {
  return (
    // Usa os estilos importados
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header title="Minhas Tarefas Diárias" />

 
       <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite uma nova tarefa..."
            placeholderTextColor="#888"
          />
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listPlaceholder}>Suas tarefas aparecerão aqui!</Text>
        </View>

        
        <StatusBar style="light-content" backgroundColor="#1A1A1A" />
      </View>
    </SafeAreaView>
  );
}
