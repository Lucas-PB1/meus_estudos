import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, TextInput, StyleSheet, Button } from 'react-native';

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: "https://www.tjpb.jus.br/sites/default/files/media/2019/04/nat-jus-topo.png" }}
    />
  );
}

function HomeScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);
  return (
    <View style={styles.container}>
      <Button title="Crie um post" onPress={() => navigation.navigate('CreatePost')} />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button title="Detalhes" onPress={() => navigation.navigate('Details')} />
      <Button title="atualiza o titulo" onPress={() => navigation.setOptions({ title: 'Ih mudou!' })} />
      <StatusBar style="auto" />
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="Digite o que está na sua mente?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Enviar!"
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title="Detalhes...Dnv" onPress={() => navigation.push('Details')} />
      <View style={styles.space}>
        <Button title="Inicio" onPress={() => navigation.navigate('Home')} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <Button title="Primeira tela!" onPress={() => navigation.popToTop()} />
    </View>
  );
}
const op = { title: 'Inicio', headerStyle: { backgroundColor: '#f4511e' }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold' } };
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={op} />
        <Stack.Screen name="Details"
          component={DetailsScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#ccc"
              />
            ),
          }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={{ title: 'Criando um post' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    flexDirection: 'row',
    marginTop: 10,
  },
});