import React from 'react'
import MapView from 'react-native-maps'
import { Button, View, Text } from 'react-native'
import { StyleSheet } from "react-native"
class MapScreen extends React.Component {
    static navigationOptions = {
        title: 'Hello',
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                ...StyleSheet.absoluteFillObject,
                height: 400,
                width: 400,
                justifyContent: 'flex-end',
                alignItems: 'center',
            },
            map: {
                ...StyleSheet.absoluteFillObject,
            },
        });
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
            // <View></View>
        );
    }
}
export default MapScreen;