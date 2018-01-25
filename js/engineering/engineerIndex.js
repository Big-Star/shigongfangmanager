import React, { Component } from 'react';
import {View,Text} from 'react-native';
import HeaderNoBack from '../common/title'
export default class EngineerIndex extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderNoBack text='工程信息'/>
                <Text>工程信息</Text>
            </View>
        )
    }
}