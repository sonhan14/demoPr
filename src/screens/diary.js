import React from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';

export default class DiaryScreen extends React.Component {
    constructor() {
        super();

        /**
        * Returns true if the screen is in portrait mode
        */
        const isPortrait = () => {
            const dim = Dimensions.get('screen');
            return dim.height >= dim.width;
        };

        this.state = {
            orientation: isPortrait() ? 'portrait' : 'landscape'
        };

        // Event Listener for orientation changes
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: isPortrait() ? 'portrait' : 'landscape'
            });
        });

    }

    render() {
        if (this.state.orientation === 'portrait') {
            return (
                <View>
                    <Text>Render View to be displayed in portrait mode</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text>Render View to be displayed in landscape mode</Text>
                </View>
            )
        }

    }
}



