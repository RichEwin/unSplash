import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Error from '../components/Error';

Enzyme.configure({ adapter: new Adapter() });

describe('<Error />', () => {
  it('renders an error message when api call fails', () => {
    const wrapper = shallow(<Error />,);
    expect(wrapper.text()).toEqual('oops, that search did not find anythingtry something else');
  });
});