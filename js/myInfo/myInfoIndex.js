import React, { Component } from 'react';
import {View,Text} from 'react-native';
import HeaderNoBack from '../common/title'
export default class MyInfoIndexIndex extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderNoBack text='我的信息'/>
                <Text>我的信息</Text>
            </View>
        )
    }
}