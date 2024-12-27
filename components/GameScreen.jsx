import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const GameScreen = () => {
    const [inputValue, setInputValue] = useState('');

    const handleButtonClick = (value) => {
        setInputValue(inputValue + value);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
            <TextInput
                style={styles.textInput}
                value={inputValue}
                editable={false}
            />
            <View style={styles.buttonContainer}>
                {[...Array(10).keys()].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={styles.button}
                        onPress={() => handleButtonClick(num.toString())}
                    >
                        <Text style={styles.buttonText}>{num}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    textInput: {
        width: 300,
        height: 100,
        fontSize: 24,
        marginBottom: 20,
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#007bff',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    },
});

export default GameScreen;
