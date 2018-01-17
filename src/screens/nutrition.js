import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class NutritionPage extends React.Component {
  render() {
    return (
      <View>
        <Text>
          This is the main nutrition page. This page will be removed from the icons
          and be a sort of information page for the user.
        </Text>
      </View>
    );
  }
}

const mapStoreToProps = (state) => (state);

export default connect(mapStoreToProps)(NutritionPage);
