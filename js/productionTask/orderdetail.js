import React, { Component } from 'react';
import {View,Text,FlatList,StyleSheet,TouchableHighlight} from 'react-native';
export default class Orderdetail extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                {/*订单详细信息*/}
                <View style={{flex:1,flexDirection:'row'}}>
                    {/*左部分*/}
                    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'red'}}>
                        <Text style={ordStyles.leftText}>订</Text>
                        <Text style={[ordStyles.leftText,ordStyles.marginTop20]}>单</Text>
                    </View>
                    {/*右部分*/}
                    <View style={{flex:4,backgroundColor:'blue'}}>
                        <Text style={ordStyles.rightText}>工程名称：</Text>
                        <Text style={ordStyles.rightText}>施工部位：</Text>
                        <Text style={ordStyles.rightText}>混凝土品种：     强度：</Text>
                        <Text style={ordStyles.rightText}>供货日期：</Text>
                        <Text style={ordStyles.rightText}>时间要求：</Text>
                        <Text style={ordStyles.rightText}>订货数量：</Text>
                        <Text style={ordStyles.rightText}>其他要求：</Text>
                    </View>
                </View>
                {/*签收状况*/}
                <View style={{flex:2}}>
                    <FlatList style={ordStyles.marginTop10}
                        data={[
                            {chepai: '黑A12345',shuliang:'15立方米',zhuangtai:'已签收'},
                            {chepai: '黑A12345',shuliang:'15立方米',zhuangtai:'已签收'},
                            {chepai: '黑A12345',shuliang:'15立方米',zhuangtai:'已签收',dangqian:'哈尔滨市三大动力路'},
                            ]}
                        renderItem={({item}) =>
                            <View style={ordStyles.marginTop10}>
                            {/*上部分*/}
                                <View style={{flexDirection:'row'}}>
                                    <Text style={[ordStyles.flex1,ordStyles.upText,ordStyles.chepaiText]}>{item.chepai}</Text>
                                    <Text style={[ordStyles.flex1,ordStyles.upText]}>{item.shuliang}</Text>
                                    <Text style={[ordStyles.flex1,ordStyles.upText]}>{item.zhuangtai}</Text>

                                </View>
                                <View>
                                    <Text style={[ordStyles.marginLeft30,ordStyles.marginTop10]}>当前位置：{item.dangqian}</Text>
                                </View>
                            {/*下部分*/}
                                <View>
                                    <TouchableHighlight style={[ordStyles.findBtn,ordStyles.marginTop10,ordStyles.marginBottom10,ordStyles.marginLeft60]}
                                        onPress = {this.onPress}>
                                            <Text>查看轨迹</Text>
                                    </TouchableHighlight>
                                </View>
                        </View>}
                              ItemSeparatorComponent={ItemDivideComponent}//分割线
                    />
                </View>
            </View>
        )
    }
}
//分割线
class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: 'skyblue'}}/>
        );
    }
};
const ordStyles = StyleSheet.create({
    flex1:{
      flex:1,
    },
    marginLeft30:{
        marginLeft:30
    },
    marginLeft60:{
      marginLeft:60
    },
    marginTop10:{
        marginTop:10
    },
    marginBottom10:{
        marginBottom:10
    },
    marginTop20:{
      marginTop:20,
    },
    leftText:{
        color:'white',
        fontSize:20,
    },
    dangqianText:{
        color:'green',
    },
    rightText:{
        color:'black',
        marginTop:6,
        fontSize:15,
        marginLeft:10,
    },
    upText:{
        marginTop:5,
        textAlign:'center',
        fontSize:12,
    },
    chepaiText:{
        color:'blue',
        fontSize:14,
    },
    findBtn:{
        width:60,
        height:25,
        borderColor:'grey',
        borderWidth:1,
        borderRadius: 8,
    }
})