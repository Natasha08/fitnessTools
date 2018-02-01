import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import _ from 'lodash';
import { foodInputs } from '../helpers/inputs/new_food';
import styles from '../styles/main';
import axios from 'axios';
import config from '../../config';

class NewFood extends React.Component {
  state = {...foodInputs, processing: false, processed: false};

  checkErrors = () => {
    const foodInputs = _.filter(this.state, 'label');
    const hasEmptyInputs = _.filter(foodInputs,  {'value': null});
    const notEmptyInputs = _.difference(foodInputs, hasEmptyInputs);

    if (hasEmptyInputs.length) {
      // something for errors
    } else if (notEmptyInputs) {
      // update state

    }

    if (!hasEmptyInputs.length) {
      return this.submit();
    }
  }

  submit = () => {
    this.setState({processing: true});
    const efridge = _.map(this.state.foodInputs, (input) => {
     return {[input.save_as]: input.value};
    });
    const url = config.API_HOST + '/api/token';
    const token = _.get(this.props, 'auth.token', null);
    axios.defaults.headers = _.assign({'Authorization': 'Bearer ' + token});
    console.log("EFRIDGE=======================", efridge)
    console.log("INPUT=======================", this.state.foodInputs);
    return axios.post(url, { json: efridge })
    .then((response) => {
      console.log("ADDED NEW FOOD RESPONSE=============", response);
      newFoodSaved(response.data);
    })
    .catch((error) => console.log("ERROR LOGGING IN", error));
  }
  updateInput = ({ label }) => {
    return (e) => {
      const foodInputs = _.filter(this.state, 'label');
      const updatedInputs = _.map(this.state, (stateInput) => {
        if (stateInput.label == label) _.assign(stateInput, {value: e.target.value});
        return stateInput;
      });

      this.setState({ foodInputs: _.assign(foodInputs, updatedInputs)});
    }
  }
  render() {
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container}>
          { _.map(this.state, (input) => (
            input.label &&
            <View style={styles.formSection}>
              <FormLabel for={input.label || ''}>{input.label}</FormLabel>
              <FormInput
               key={input.label}
               type={input.type}
               onChange={this.updateInput(input)}
               placeholder={input.placeholder}
               defaultValue={input.value}
              />
            </View>
          ))}
          <View style={styles.formSection}>
            <Button style={styles.submit} onPress={this.checkErrors}
              title="Save" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStoreToProps = ({new_food, auth}) => ({newFood: new_food, auth})
const mapDispatchToProps = (dispatch) => {
  return {
    food_saved: (user) => dispatch(newFoodSaved())
  }
};

export default connect(mapStoreToProps, mapDispatchToProps)(NewFood);
