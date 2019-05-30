import ModalPicker from 'react-native-modal-picker'
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class NewPicker extends Component {
    constructor() {
        super()

        this.state = {
            textInputValue = ''
        }
    }

    render(){
        let index = 0
        const data = [
            { key: index++, label: 'Online' },
            { key: index++, label: 'Offline' }
        ]
    
        return(
            <View style={{flex:1, justifyContent:'space-around', padding:50}}>
 
                <ModalPicker
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ alert(`${option.label} (${option.key}) nom nom nom`) }} />
 
                <ModalPicker
                    data={data}
                    initValue="Select something yummy!"
                    onChange={(option)=>{ this.setState({textInputValue:option.label})}}>
                    
                    <TextInput
                        style={{borderWidth:1, borderColor:'#ccc', padding:10, height:30}}
                        editable={false}
                        placeholder="Select something yummy!"
                        value={this.state.textInputValue} />
                        
                </ModalPicker>
            </View>
        )
    
    }
}