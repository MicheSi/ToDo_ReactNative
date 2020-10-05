import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notesList: [],
            noteText: ''
        }
    }
    
    render () {
        let notes = this.state.notesList.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={() => this.deleteNote(key)}/>
        })

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>To Do List</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                     style={styles.textInput}
                     onChangeText={(noteText) => this.setState({noteText})}
                     value={this.state.noteText}
                     placeholder='Add new item'
                     placeholderTextColor='white'
                     underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              
            </View>
          );
    }

    addNote() {
        if (this.state.noteText) {
            const noteDate = new Date();
            this.state.notesList.push({
                'date':  (noteDate.getMonth() + 1) + '/' + noteDate.getDate() + '/' + noteDate.getFullYear(),
                'note': this.state.noteText
            })
            this.setState({notesList: this.state.notesList})
            this.setState({noteText: ''})
        }
    }

    deleteNote(key) {
        this.state.notesList.splice(key, 1);
        this.setState({notesList: this.state.notesList})
    }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
      backgroundColor: '#4682B4',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: '#4682B4',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24,
  }
});