import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Title from '../components/Title';

Enzyme.configure({ adapter: new Adapter() });

describe('<Title />', () => {
  it('renders the app title', () => {
    const wrapper = shallow(<Title />,);
    expect(wrapper.find('h1').text()).toEqual('unSplash');
  });
});