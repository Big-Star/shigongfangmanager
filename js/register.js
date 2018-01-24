import React, { Component } from 'react';
import {TextInput, View, Text, Button, StyleSheet, TouchableHighlight} from 'react-native'
import { StackNavigator } from 'react-navigation';
class Register extends Component
{
    render(){
        return(
        <View style={{flex: 1}}>
            <View style={[regStyles.marginTop10, {flexDirection: 'row'}]}>
                <View style={[regStyles.textStyle]}>
                    <Text style={[regStyles.fontStyle]}>手机号：</Text>
                </View>
                <View style={[regStyles.textInputStyle]}>
                    <TextInput
                        style={[regStyles.flex1, regStyles.marginLeft5]}
                        placeholder="请输入手机号"
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>
            <View style={regStyles.line}/>
            <View style={[regStyles.marginTop10, {flexDirection: 'row'}]}>
                <View style={[regStyles.textStyle]}>
                    <Text style={[regStyles.fontStyle]}>验证码：</Text>
                </View>
                <View style={[regStyles.textInputStyle, {flexDirection: 'row'}]}>
                    <TextInput
                        style={[regStyles.flex1, regStyles.marginLeft5]}
                        placeholder="请输入验证码"
                        underlineColorAndroid={'transparent'}
                    />
                    <Button style={{flex: 1}} title="获取验证码"/>
                </View>
            </View>
            <View style={regStyles.line}/>
            <View style={[regStyles.marginTop10, {flexDirection: 'row'}]}>
                <View style={[regStyles.textStyle]}>
                    <Text style={[regStyles.fontStyle]}>密码：</Text>
                </View>
                <View style={[regStyles.textInputStyle]}>
                    <TextInput
                        style={[regStyles.flex1, regStyles.marginLeft5]}
                        placeholder="请输入密码"
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>
            <View style={regStyles.line}/>
            <View style={[regStyles.marginTop10, {flexDirection: 'row'}]}>
                <View style={[regStyles.textStyle]}>
                    <Text style={[regStyles.fontStyle]}>确认密码：</Text>
                </View>
                <View style={[regStyles.textInputStyle]}>
                    <TextInput
                        style={[regStyles.flex1, regStyles.marginLeft5]}
                        placeholder="请输入确认密码"
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
            </View>
            <View style={regStyles.line}/>
            <TouchableHighlight
                style={[regStyles.buttonStyle, regStyles.marginTop10]}
            >
                <Button
                    title="注册"
                />
            </TouchableHighlight>
        </View>
        )
        }


};


const regStyles = StyleSheet.create({
    flex1:{
        flex:1
    },
    marginTop10:{
        marginTop:10,
    },
    textStyle:{
        width:120,
        height:60,
        alignItems:'flex-end',
        justifyContent:'center',

    },
    textInputStyle:{
        width:240,
        height:60,
    },
    fontStyle:{
        fontSize:22,

    },
    marginLeft5:{
        marginLeft:5
    },
    buttonStyle: {
        height:40,
        width:400,
        borderColor: 'powderblue',
        borderWidth: 1,
        borderRadius: 6,

    },
    line:{
        marginTop:5,
        backgroundColor:'#999999',
        height:1,
    }
})
export default Register;