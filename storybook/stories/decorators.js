import React from 'react'
import {View} from 'react-native';
 
export const BuffetView= (storyFn) => (
    <View style={{flex:1, marginVertical: 40, marginHorizontal:20}}>
        {storyFn()}
    </View>
)