import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList, Image } from 'react-native';
import axios from 'axios';

class RoverPhotos extends Component {
    state = {
        photos: []
    }
    componentDidMount() {
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=')
        .then(doc => {
            this.setState({photos:doc.data.photos});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={{width: '100%'}}
                    data={this.state.photos}
                    keyExtractor={item => item.id}
                    renderItem={data => {
                        return (
                            <View style={{width: '100%', height: 200, padding: 10, marginVertical: 20}}>
                                <Image style={{width: '100%', height: '100%'}} source={{uri: data.item.img_src}}/>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={{color: 'white', fontSize: 18}}>{data.item.rover.name}</Text>
                                    <Text style={{color: 'white', fontSize: 18}}>Earth date: {data.item.earth_date}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        );
    }
}

RoverPhotos.navigationOptions = navdata => {
    return {
        title: 'Rover photos'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000015'
    }
});

export default RoverPhotos;
