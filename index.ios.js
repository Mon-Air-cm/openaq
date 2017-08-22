/**
 * openaq - React Native App
 * https://github.com/facebook/react-native
 * https://github.com/AshishKapoor/open-aq
 * Open Air Quality application.
 * Developed by Ashish Kapoor.
 */

import React, { Component } from 'react';
import { Alert, AppRegistry, Text, StyleSheet, View, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons'
import {OffCanvasReveal} from 'react-native-off-canvas-menu'
import Menu1 from './src/MenuScenes/Menu1'
import Menu2 from './src/MenuScenes/Menu2'

class openaq extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  render() {
    console.disableYellowBox = true;

    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="white"
        barStyle="light-content"
        animated={true}
      /> : null

    return (
      <View style={{flex: 1}}>

        { statusBar }

        <OffCanvasReveal
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Menu 1',
            icon: <Icon name="camera" size={35} color='#ffffff' />,
            renderScene: <Menu1 handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Menu 2',
            icon: <Icon name="bell" size={35} color='#ffffff' />,
            renderScene: <Menu2 handleMenu={this.handleMenu.bind(this)}/>
          }
        ]}/>

      </View>
    )
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.props.active = false
    this.setState({
      menuOpen: !menuOpen
    })
  }
}

AppRegistry.registerComponent('openaq', () => openaq);