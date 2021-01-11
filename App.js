import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import Movies from './Movies';
import Header from './components/Header';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=superman&apikey=28f4dae9')
        .then((response) => response.json())
        .then((json) => setData(json ? json.Search : []))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const moviesComponent = data.map(item => <Movies key={item.imdbID} movies={item}/> )
    console.log(moviesComponent);

    return (
    <SafeAreaView>
        <ScrollView className="App">
            <Header />
            {moviesComponent}
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});