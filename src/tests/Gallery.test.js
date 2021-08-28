import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Gallery from '../components/Gallery';

Enzyme.configure({ adapter: new Adapter() });

const searchResults = [{
  id: 'gDPaDDy6_WE',
  description: 'red apple fruit',
  urls: {
    regular: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNDUyNjd8MHwxfHNlYXJjaHwyfHxhcHBsZXxlbnwwfHx8fDE2Mjc2NDA2Njc&ixlib=rb-1.2.1&q=80&w=1080',
  },
}];

describe('<Gallery />', () => {
  it('renders a image to the gallery', () => {
    const wrapper = shallow(<Gallery searchResults={searchResults}/>)
    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('uses the image id as a key', () => {
    const wrapper = shallow(<Gallery searchResults={searchResults}/>)
    expect(wrapper.find('img').key()).toEqual('gDPaDDy6_WE');
  });

  it('expects img src to match unsplash.com', () => {
    const wrapper = shallow(<Gallery searchResults={searchResults}/>)
    expect(wrapper.find('img').prop("src")).toMatch('unsplash.com');
  });
});
