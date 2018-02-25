import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
	const wrapper = shallow(<ExpenseDashboardPage />);
	// expect(wrapper.find('h1').text()).toBe('Expensify');
	expect(wrapper).toMatchSnapshot();
});