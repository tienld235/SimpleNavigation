import styles from './styles';
import React, { PureComponent } from 'react';
import {ScrollView} from 'react-native';
import { Button} from 'react-native-elements';
import {DrawerItems, SafeAreaView, withNavigation} from 'react-navigation';

class BurgerMenu extends PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        const {navigation} = this.props;
        return(
            <SafeAreaView style={styles.container} forceInset={{top: "always", horizontal: "never"}}>
                <ScrollView style={styles.container}>
                    <DrawerItems {...this.props} />
                </ScrollView>
                <Button icon={{ name: "md-log-out", type: "ionicon" }} title="Log Out" onPress={() => navigation.navigate("LoadingScreen", {
                    request : "Logout"
                })} />
            </SafeAreaView>
        )
    }
}
export default withNavigation(BurgerMenu);