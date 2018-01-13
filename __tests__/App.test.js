import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

import IosApp from '../App';

it('renders without crashing', () => {
  const wrapper = shallow(<IosApp />);
  
  expect(wrapper).toMatchSnapshot();
});
