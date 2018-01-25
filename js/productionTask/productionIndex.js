import React, { Component } from 'react';
import {View,Text,FlatList,StyleSheet,TouchableHighlight} from 'react-native';
import HeaderNoBack from '../common/title'
export default class ProductionIndex extends Component{
    //此函数用于为给定的item生成一个不重复的key
    //若不指定此函数，则默认抽取item.key作为key值。若item.key也不存在，则使用数组下标index。
    _keyExtractor = (item, index) => index;
    _footer = () => (
        <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
    )
    onPress(){
        alert("hello");
    }
    createEmptyView() {
        return (
            <Text style={{fontSize: 20, alignSelf: 'center'}}>还没有数据哦！</Text>
        );
    }
    render(){
        return(
            <View style={{flex:1}}>
                <HeaderNoBack text='生产任务'/>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <Text style={{marginRight:20}}>排序</Text>
                    <Text>筛选</Text>
                </View>
                <FlatList
                    // data={[]}    //空数据测试
                    data={[
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'},
                        {title: '东林名苑二区',tran:'运输中',company:'哈尔滨商业混凝土有限公司',info:'15号楼 楼体 普通栓 C20',min:'15万',max:'20万',xTime:'2015年8月10日',gTime:'2016年10月15日'}]}
                    renderItem={({item}) => <View>
                        {/*标题及状态*/}
                        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                            <View style={[proStyles.flex1,proStyles.marginLeft10,proStyles.marginTop10]}><Text style={proStyles.titleText}>{item.title}</Text></View>
                            <View style={[proStyles.flex1,proStyles.marginLeft10,proStyles.marginTop10]}><Text style={proStyles.tranText}>{item.tran}</Text></View>
                            <View style={[proStyles.flex1,proStyles.marginLeft10,proStyles.marginTop10]}></View>
                        </View>

                        {/*信息详情*/}
                        <View style={[proStyles.flex1,{flexDirection:'row'}]}>
                            <View style={proStyles.flex3}>
                                <Text style={[proStyles.marginLeft10,proStyles.marginTop10]}>{item.company}</Text>
                                <Text style={[proStyles.marginLeft10,proStyles.marginTop10]}>{item.info}</Text>
                            </View>
                            <View style={[proStyles.flex2,proStyles.center]}>
                                <Text style={proStyles.minMoneyText}>{item.min}<Text style={{color:'black'}}>/</Text><Text style={proStyles.maxMoneyText}>{item.max}</Text></Text>
                            </View>
                            <TouchableHighlight
                                onPress = {this.onPress}>
                                <View style={[proStyles.flex1]}>
                                    <Text>详细</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        {/*时间显示*/}
                        <View style={[proStyles.marginLeft10,{flexDirection:'row'}]}>
                            <View style={proStyles.flex1}><Text>下单时间：{item.xTime}</Text></View>
                            <View style={proStyles.flex1}><Text>供货日期：{item.gTime}</Text></View>
                        </View>


                    </View>}
                    ItemSeparatorComponent={ItemDivideComponent}//分割线
                    keyExtractor={this._keyExtractor}//item 中无key 会出提示，次方法解决
                    //空数据视图,可以是React Component,也可以是一个render函数，或者渲染好的element。
                    ListEmptyComponent={this.createEmptyView()}
                    ListFooterComponent={this._footer}//footer尾部组件

                />
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
const proStyles = StyleSheet.create({
    center:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex1:{
        flex:1
    },
    flex2:{
        flex:2
    },
    flex3:{
        flex:3
    },
    marginTop10:{
      marginTop:10
    },
    marginLeft10:{
      marginLeft:10,
    },
    titleText:{
        fontSize:15,
        color:'blue'
    },
    tranText:{
        fontSize:12,
        color:'blue'
    },
    minMoneyText:{
        fontSize:25,
        color:'green'
    },
    maxMoneyText:{
        fontSize:25,
        color:'red'
    }
})