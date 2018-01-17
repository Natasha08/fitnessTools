import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import _ from 'lodash';

class SavedFoods extends React.Component {
  createNewFood = () => {
    this.props.navigation.navigate('NewFood');
  }

  render() {
    const { saved_foods=[] } = this.props;

    if (!saved_foods.length) {
      return (
        <View style={styles.container}>
          <Text>You have {saved_foods.length} saved foods</Text>
          <Button onPress={this.createNewFood} title={"Create"} />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
});

const mapStoreToProps = ({saved_foods}) => ({saved_foods});

export default connect(mapStoreToProps)(SavedFoods);
