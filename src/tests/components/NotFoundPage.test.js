import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
	const wrapper = shallow(<NotFoundPage />);
	// expect(wrapper.find('h1').text()).toBe('Expensify');
	expect(wrapper).toMatchSnapshot();
});