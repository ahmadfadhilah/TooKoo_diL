import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Simple from 'react-native-vector-icons/SimpleLineIcons';
import Help from 'react-native-vector-icons/Ionicons';
import Clock from 'react-native-vector-icons/AntDesign';

export default class NotAccount extends Component {
  gotoSetting() {
    this.props.navigation.navigate('SettingAccount');
  }

  gotoNavTopTab() {
    this.props.navigation.navigate('NavTopTab');
  }

  gotoRegister() {
    this.props.navigation.navigate('Register');
  }

  render() {
    return (
      <View style={styles.container}>
        {/* profile atas  */}
        <View style={{backgroundColor: '#ffff3d'}}>
          <View style={styles.Icon}>
            <TouchableOpacity>
              <Icon name="arrow-back-ios" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.gotoSetting()}>
              <Icon name="settings" size={25} />
            </TouchableOpacity>
          </View>
          <View style={styles.user}>
            <Image
              source={require('../../../assets/Image/user.png')}
              style={styles.userImg}
            />
            <View style={styles.not}>
              <TouchableOpacity
                style={styles.Account1}
                onPress={() => this.gotoNavTopTab()}>
                <Text style={styles.textd}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
        {/* Bar section */}
        <View>
          <TouchableOpacity style={styles.name}>
            <View style={styles.namehal}>
              <Clock name="hearto" size={22} style={{paddingLeft: 5}} />
              <Text style={styles.text}>Favorit saya</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.name}>
            <TouchableOpacity style={styles.namehal}>
              <Help
                name="clipboard-outline"
                size={22}
                style={{paddingLeft: 5}}
              />
              <Text style={styles.text}>Pesanan saya</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.name}>
            <TouchableOpacity style={styles.namehal}>
              <Clock name="staro" size={22} style={{paddingLeft: 5}} />
              <Text style={styles.text}>Beri Penilaian</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.name}>
            <TouchableOpacity style={styles.namehal1}>
              <Clock name="message1" size={22} style={{paddingLeft: 5}} />
              <Text style={styles.text}>Ulasan saya</Text>
            </TouchableOpacity>
          </View>
          {/* Help */}
          <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
          <View style={styles.name}>
            <TouchableOpacity
              style={styles.namehal}
              onPress={() => this.gotoSetting()}>
              <Simple name="user" size={20} style={{paddingLeft: 5}} />
              <Text style={styles.text}>Pengaturan Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.name}>
            <TouchableOpacity style={styles.namehal1}>
              <Help name="help-outline" size={22} style={{paddingLeft: 5}} />
              <Text style={styles.text}>Pusat Bantuan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

// styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
  },
  user: {
    alignItems: 'center',
    marginBottom: 14,
    marginTop: -18,
  },
  userImg: {
    width: 140,
    height: 140,
    marginTop: 40,
  },
  name: {
    marginTop: 12,
  },
  namehal: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginLeft: 20,
    flexDirection: 'row',
  },
  namehal1: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  text: {
    marginLeft: 14,
    marginBottom: 12,
  },
  not: {
    marginTop: 16,
    flexDirection: 'row',
  },
  Account: {
    borderWidth: 1,
    paddingTop: 6,
    paddingBottom: 7,
    paddingRight: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: 'white',
    right: 5,
    paddingLeft: 15,
  },
  Account1: {
    borderWidth: 1,
    paddingTop: 6,
    paddingBottom: 7,
    paddingRight: 14,
    borderRadius: 2,
    left: 5,
    alignContent: 'center',
    paddingLeft: 15,
  },
  textl: {
    color: '#ffff3d',
  },
  textd: {
    color: 'white',
  },
});
