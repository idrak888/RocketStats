import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import axios from 'axios';

class Asteroids extends Component {
    state = {
        neoData: [],
        dates: []
    }

    componentDidMount() {
        axios.get('https://api.nasa.gov/neo/rest/v1/feed?&api_key=8PSnUUZqhJUxO62eO9TbYWjtLrbZq4hGpUJFC6MG')
        .then(doc => {
            var dates = [];
            for (let date in doc.data.near_earth_objects) {
                dates.push(date);
            }
            this.setState({neoData:doc.data.near_earth_objects, dates});
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginVertical: 20}}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Near Earth Objects (NEO data)</Text>
                    <Text style={{color: 'white', fontSize: 16}}>{this.state.dates[0]}</Text>
                </View>
                <FlatList 
                    data={this.state.neoData[Object.keys(this.state.neoData)[0]]}
                    keyExtractor={item => item.id}
                    renderItem={
                        data => {
                            return (
                                <View style={styles.objectWrapper}>
                                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>{data.item.name}</Text>
                                    <View style={{padding: 10}}>
                                        <Text style={{color: 'white', fontSize: 16}}>Est. Diameter (min): {Math.floor(data.item.estimated_diameter.meters.estimated_diameter_min)} meters</Text>
                                        <Text style={{color: 'white', fontSize: 16}}>Est. Diameter (max): {Math.floor(data.item.estimated_diameter.meters.estimated_diameter_max)} meters</Text>
                                    </View>
                                    <Text style={data.item.is_potentially_hazardous_asteroid ? styles.hazardous : styles.nonHazardous}>
                                        {
                                            data.item.is_potentially_hazardous_asteroid ? 
                                                "Hazardous asteroid"
                                            : 
                                            "Non-hazardous asteroid"
                                        }
                                    </Text>
                                </View>
                            )
                        }
                    }
                />
            </View>
        );
    }
}

Asteroids.navigationOptions = navdata => {
    return {
        title: 'Asteroids count'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000015',
        padding: 20
    },
    objectWrapper: {
        padding: 10,
        marginVertical: 10,
        borderBottomColor: 'white',
        borderBottomWidth: 0.25
    },
    hazardous: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    },
    nonHazardous: {
        fontSize: 18,
        color: 'green',
        fontWeight: 'bold'
    }
});

export default Asteroids;