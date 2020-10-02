import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

export default function Main() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>To Do List</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>

        </ScrollView>
        <View style={styles.footer}>
            <TextInput 
             style={styles.textInput}
             placeholder='Enter to do'
             placeholderTextColor='white'
             underlineColorAndroid='transparent'
             >

            </TextInput>

        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});