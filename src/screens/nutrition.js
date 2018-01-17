import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class NutritionPage extends React.Component {
  render() {
    return (
      <View>
        <Text>
          I am a Food Screen
        </Text>
      </View>
    );
  }
}

const mapStoreToProps = (state) => (state);

export default connect(mapStoreToProps)(NutritionPage);
