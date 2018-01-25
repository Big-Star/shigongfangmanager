import React, { Component } from 'react';
import {View,Text} from 'react-native';
import HeaderNoBack from "../common/title";
export default class InfomationIndex extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderNoBack text='信息列表'/>

                <Text>信息列表</Text>
            </View>
        )
    }
}