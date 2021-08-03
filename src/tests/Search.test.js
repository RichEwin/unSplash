import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Search from '../components/Search';
import Gallery from '../components/Gallery';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search />', () => {
  it('renders a search box for user input', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('input').text()).toEqual('');
  });

  it('renders a button to search', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('button').text()).toEqual('search');
  });

  it('renders a <Gallery /> component', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(Gallery)).toHaveLength(1);
  });
});
