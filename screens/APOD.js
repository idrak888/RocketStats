import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import axios from 'axios';

class APOD extends Component {
    state = {
        image: {},
        imageLoaded: false
    }
    componentDidMount() {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=')
        .then(doc => {
            this.setState({image:doc.data});
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 28, color: 'white', fontWeight: 'bold', marginTop: 50, textAlign: 'center'}}>{this.state.image.title}</Text>
                <View style={{alignItems: 'center'}}>
                    <Image 
                        style={this.state.imageLoaded ? {width: '100%', height: 300, marginVertical: 20} : {width: '100%', height: 10, marginVertical: 20}}
                        onLoad={() => {
                            this.setState({imageLoaded: true});
                        }}
                        source={{uri: this.state.image.url}}
                    />
                    <Image 
                        style={this.state.imageLoaded ? {width: 50, height: 50, marginVertical: 30, display: 'none'} : {width: 50, height: 50, marginVertical: 30}}
                        source={{uri: 'https://media1.giphy.com/media/17mNCcKU1mJlrbXodo/giphy.gif'}}
                    />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 20, color: 'white'}}>By {this.state.image.copyright}</Text>
                    <Text style={{fontSize: 20, color: 'white'}}>{this.state.image.date}</Text>
                </View>
            </View>
        );
    }
}

APOD.navigationOptions = navdata => {
    return {
        title: 'Picture of the day'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000015',
        padding: 20
    }
});

export default APOD;
