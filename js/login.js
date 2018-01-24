import React, { Component } from 'react';
import {  View,Text,TextInput,Button,StyleSheet,TouchableHighlight,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RegisterPage from './register';
const LoginScreen = ({navigation}) => (
    <View style={{flex:1, flexDirection: 'column'}}>
        {/*logo部分*/}
        <View style={[styles.center,{flex:2, backgroundColor: 'powderblue'}]} >
            <Text>商砼助手</Text>
        </View>
        {/*登录部分*/}
        <View style={[styles.center,{flex:2}]}
        >
            <TextInput
                style={[styles.inputStyle,styles.marginTop10]}
                placeholder="请输入用户名"
                editable = {true}
                underlineColorAndroid={'transparent'}
            />
            <TextInput
                style={[styles.inputStyle,styles.marginTop10]}
                placeholder="请输入密码"
                secureTextEntry={true}
                underlineColorAndroid={'transparent'}
            />
            <TouchableHighlight
                style={[styles.buttonStyle,styles.marginTop10]}
                onPress = {
                    () => {
                        Alert.alert('test success')
                    }
                }
            >
                {/*<Text style={{*/}
                {/*borderColor: 'powderblue',*/}
                {/*borderWidth: 1*/}
                {/*}}*/}
                {/*>*/}
                {/*登录</Text>*/}
                <Button
                    title="登录"
                />
            </TouchableHighlight>
            <Text style={styles.marginTop10}>忘记密码？</Text>
        </View>
        {/*未注册部分*/}
        <View style={[styles.center,{flex:1}]} >
            <View style={{flexDirection:'row',alignItems: 'center'}}>
                <View style={styles.unRegisterLine}></View>
                <Text style={styles.unRegisterLabel}>你还没有注册？</Text>
                <View style={styles.unRegisterLine}></View>
            </View>
            <TouchableHighlight
                style={[styles.buttonStyle,styles.marginTop10]}
                 >
                <Button onPress={() => navigation.navigate('Details')}
                        title="注册"
                />
            </TouchableHighlight>
        </View>

    </View>
);

const RegisterScreen = () => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RegisterPage/>
    </View>
);
const RootNavigator = StackNavigator({
    Home: {
        screen: LoginScreen,
        navigationOptions: {
            header:null,
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: RegisterScreen,
        navigationOptions: {
            headerTitle: '用户注册',
        },
    },
});

const styles = StyleSheet.create({
    center:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    columnCenter:{
        justifyContent: 'center',
    },
    rowCenter:{
        alignItems: 'center'
    },
    marginTop10:{
        marginTop:10
    },
    buttonStyle: {
        height:40,
        width:220,
        borderColor: 'powderblue',
        borderWidth: 1,
        borderRadius: 6,

    },
    textStyle:{
        height:10,
        width:240,
    },
    inputStyle:{
        textDecorationLine: 'none',
        width:240,
        borderColor: 'powderblue',
        borderWidth: 1,
        borderRadius:6,

    },
    unRegisterLine:{
        backgroundColor:'#999999',
        height:1,
        width:80,
        marginLeft:10,
        marginRight:10
    },
    unRegisterLabel:{
        color: '#505050',
        fontSize:13
    }
});
export default RootNavigator;
