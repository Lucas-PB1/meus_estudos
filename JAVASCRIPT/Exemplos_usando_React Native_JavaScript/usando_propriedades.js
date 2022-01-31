import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Button, SectionList } from 'react-native';

const fullname = (n1, n2, n3) => {
    return n1 + ' ' + n2 + ' ' + n3;
};

const Title = (props) => {
    return (
        <View>
            <Text style={styles.title}>{props.name}</Text>
        </View>
    );
}
const Post = () => {
    return (
        <View style={styles.sec_container}>
            <SectionList
                sections={[
                    { title: 'D', data: ['Devin', 'Dan', 'Dominic', 'Devin', 'Dan', 'Dominic'] },
                    { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    { title: 'E', data: ['Erick', 'Ester', 'Edna', 'Elida'] },
                    { title: 'H', data: ['Henrique', 'Hermes', 'Hecate', 'Heloisa'] },
                ]}
                renderItem={({ item }) => <Text style={styles.sec_item}>{item}</Text>}
                renderSectionHeader={({ section }) => <Text style={styles.sec_header}>{section.title}</Text>}
                keyExtractor={(item, index) => index}
            />
        </View>
    );

}

export default function App() {
    const [login, setLogin] = useState(true);
    const [texto, setTexto] = useState('');

    if (!login) {
        return (
            <ScrollView>
                <Post />
            </ScrollView>
        );
    }

    return (
        <View style={styles.container}>

            <Image style={styles.thumb} source={{ uri: "https://reactnative.dev/docs/assets/p_cat1.png" }} />
            <Title name={login ? "Login!" : "Logado!"} />
            <TextInput style={styles.input} placeholder="Digite seu nome ou email">{fullname('Lucas', 'Soares', 'Lima')}</TextInput>
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={texto => setTexto(texto)} defaultValue={texto}></TextInput>
            <Button onPress={() => { setLogin(false) }} disabled={!login} title={login ? "logar" : "login realizado"}></Button>
            <Text style={styles.texto}>{texto.split(' ').map((palavra) => palavra && '*').join(' ')}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        width: 200,
        height: 40,
        padding: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 3,
    },
    thumb: {
        width: 70,
        height: 70,
    },
    texto: {
        padding: 10,
        fontSize: 42,
    },
    sec_container: {
        padding: 10,
    },
    sec_header: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    sec_item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
