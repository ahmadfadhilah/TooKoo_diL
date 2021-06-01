import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const BoxProduct = props => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <TouchableOpacity style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/icon/25.webp')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 30,
            width: 115,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/icon/logo.jpg')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Jordan X Paris
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              Discover the latest of the collection
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 14}}>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginnTop: 20,
        }}></View>

      <TouchableOpacity style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/icon/wkwk.png')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 30,
            width: 115,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/icon/logo.jpg')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Skate Shoe
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              Nike SB Zoom Blazer Premium
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 14}}>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginnTop: 20,
        }}></View>

      <TouchableOpacity style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/icon/22.webp')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 30,
            width: 115,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/icon/logo.jpg')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Nike Air Pegasus
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              A Ma Maniere-Raised by woman
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 14}}>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginnTop: 20,
        }}></View>

      <TouchableOpacity style={{position: 'relative'}}>
        <Image
          source={require('../../../assets/icon/21.jpg')}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.2,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 30,
            width: 115,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={require('../../../assets/icon/logo.jpg')}
            style={{
              width: undefined,
              height: undefined,
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              Air Jordan Mid
            </Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>
              Air Max Pre-Day: liquid time   .
            </Text>
          </View>
          <View style={{flex: 1, paddingLeft: 14}}>
          </View>
        </View>
      </TouchableOpacity>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          paddingBottom: 16,
          marginnTop: 20,
        }}></View>
    </View>
  );
};

export default BoxProduct;
