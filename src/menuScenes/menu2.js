import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Hamburger from 'react-native-hamburger';

export default class Menu2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Hamburger 
        active={this.state.active} 
        type="spinArrow" 
        onPress= {
          () => this.setState({active: !this.state.active}),
          () => this.props.handleMenu()
        } />
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
          animated={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, 
    backgroundColor: '#1abc9c'
  }
})