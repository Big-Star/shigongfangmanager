import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

class Title extends Component{
    static navigationOptions = {
        title: 'Welcome',//设置标题内容
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Lucy'})}
                    title="Chat with Lucy"/>
            </View>
        );
    }
}