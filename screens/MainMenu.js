import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Logo from '../assets/logo.png';

class MainMenu extends Component {
    state = {
        links: [
            {navLink: 'APOD', background: 'https://s22380.pcdn.co/wp-content/uploads/2015-04-15_552ec785e77b6_download.jpg', text: 'Astronomy picture of the day'},
            {navLink: 'Asteroids', background: 'https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480x270//8/3/5/131835_shutterstock_632041256_WV.jpg', text: 'Asteroids count'},
            {navLink: 'RoverPhotos', background: 'https://scx1.b-cdn.net/csz/news/800/2019/curiosityrov.jpg', text: 'Mars rover photos'},
            {navLink: '', background: 'https://live.staticflickr.com/4153/5091372229_94378deb09_b.jpg', text: ''}
        ]
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <StatusBar translucent {...this.props} barStyle="light-content" />
                </View>
                <Image style={styles.logo} source={Logo}/>
                <FlatList style={styles.linksContainer}
                    data={this.state.links}
                    keyExtractor={item => item.id}
                    renderItem={data => {
                        return (
                            <TouchableOpacity style={styles.linkView} activeOpacity={0.8} onPress={() => {
                                this.props.navigation.navigate(data.item.navLink);
                            }}>
                                <ImageBackground source={{uri: data.item.background}} style={styles.backgroundImage}>
                                    <View>
                                        <Text style={styles.linkText}>{data.item.text}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        );
    }
}

MainMenu.navigationOptions = navdata => {
    return {
        title: 'Menu'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000015',
        paddingVertical: 30
    },
    logo: {
        width: 210,
        height: 90
    },
    linksContainer: {
        padding: 20,
        height: '100%'
    },  
    linkView: {
        marginTop: 15,
        height: 150,
        overflow: 'hidden',
        borderRadius: 5
    },
    backgroundImage: {
        width: '100%',
        height: '100%'
    },
    linkText: {
        fontSize: 28, 
        color: '#E4E3E3', 
        padding: 20, 
        backgroundColor: 'rgba(0,0,0,0.4)', 
        height: 150
    }
});

export default MainMenu;