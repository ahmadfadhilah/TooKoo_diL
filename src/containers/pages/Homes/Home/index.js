import React, {Component} from 'react';
import {View, ScrollView, Modal} from 'react-native';

import BenerBar from '../../../../components/molecules/Bannerfeature';
import NewsBar from '../../../../components/molecules/Infofeature';
import NewsSection from '../../../../components/molecules/NewsFeature';
import SeacrhBar from '../../../../components/molecules/searchfeature';
import BodyBar from '../../../../containers/organisms/BodyBar';
import ScrolProduct from '../../../../containers/organisms/HorizontalProduct';
import BoxProduct from '../../../../components/molecules/BoxProduct';

export class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <SeacrhBar  onPress={() => this.props.navigation.navigate('Message')}/>
          <BodyBar />
          <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
          <NewsSection onPress={() => this.props.navigation.navigate('NewsDetail')}/>
          <NewsBar />
          <BenerBar />
          <ScrolProduct />
          <BoxProduct />
        </ScrollView>
        {/* <Modal transparent visible={true}>
          <View style={{height: 50, width: 50, backgroundColor: 'red', alignItems: 'center', flex: 1, justifyContent: 'center'}}></View>
        </Modal> */}
      </View>
    );
  }
}

export default Home;

