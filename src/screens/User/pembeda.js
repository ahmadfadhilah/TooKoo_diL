import React, {Component} from 'react';
import Account from './Account/index';
import NotAccount from './NotAccount/index';
import AsyncStorage from '@react-native-community/async-storage';

export default class pembeda extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token').then(token => {
      if (token != null) {
        this.setState({token: token});
      } else {
        console.log('Tidak ada cuy tokennya');
      }
    });
  }

  render() {
    return (
      <>
        {this.token != null ? (
          <NotAccount {...this.props} />
        ) : (
          <Account {...this.props} />
        )}
      </>
    );
  }
}
