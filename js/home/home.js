import TabNavigator from 'react-native-tab-navigator'
import React, {Component} from 'react';
import {
    View,
    Image,
}from 'react-native';
import EngineerIndex from '../engineering/engineerIndex';
import ProductionIndex from '../productionTask/productionIndex';
import MyInfoIndex from '../myInfo/myInfoIndex';
import InfomationIndex from '../informationList/infomationIndex';
export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            selectedTab:'productionIndex',
        }
    }
    render(){
        return(
            <View  style={{flex:1}}>

                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'productionIndex'}
                        title="生产任务"
                        // renderIcon={() => <Image source={TAB_NORMAL_1} style ={styles.icon} />}
                        // renderSelectedIcon={() => <Image source={TAB_PRESS_1}style ={styles.icon}  />}
                       // badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'productionIndex' })}>
                        <ProductionIndex />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'engineerIndex'}
                        title="关联工程"
                        // renderIcon={() => <Image source={TAB_NORMAL_2} style ={styles.icon} />}
                        // renderSelectedIcon={() => <Image source={TAB_PRESS_2} style ={styles.icon} />}

                        onPress={() => this.setState({ selectedTab: 'engineerIndex' })}>
                        <EngineerIndex />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'infomationIndex'}
                        title="信息"
                        // renderIcon={() => <Image source={TAB_NORMAL_2} style ={styles.icon} />}
                        // renderSelectedIcon={() => <Image source={TAB_PRESS_2} style ={styles.icon} />}

                        onPress={() => this.setState({ selectedTab: 'infomationIndex' })}>
                        <InfomationIndex />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'myInfoIndex'}
                        title="我的"
                        // renderIcon={() => <Image source={TAB_NORMAL_2} style ={styles.icon} />}
                        // renderSelectedIcon={() => <Image source={TAB_PRESS_2} style ={styles.icon} />}

                        onPress={() => this.setState({ selectedTab: 'myInfoIndex' })}>
                        <MyInfoIndex />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}