import React, {Component} from 'react';
import {View, ScrollView, Modal} from 'react-native';

import BenerBar from '../../../../components/molecules/Bannerfeature';
import NewsBar from '../../../../components/molecules/Infofeature';
import NewsSection from '../../../../components/molecules/NewsFeature';
import SeacrhBar from '../../../../components/molecules/searchfeature';
import BodyBar from '../../../../containers/organisms/BodyBar';
import ScrolProduct from '../../../../containers/organisms/HorizontalProduct';
import BoxProduct from '../../../../components/molecules/BoxProduct';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.navigation.navigate);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <SeacrhBar history={this.props.navigation} />
          <BodyBar />
          <View style={{height: 12, backgroundColor: '#F2F2F2'}}></View>
          <NewsSection
            onPress={() => this.props.navigation.navigate('NewsDetail')}
          />
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

export default Dashboard;
