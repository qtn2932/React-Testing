import React from 'react';
import { shallow } from 'enzyme';
import renderer from'react-test-renderer'
import Button from '../components/Button/Button';

describe('<Button />', () => {
	it('renders without crashing', () => {
		shallow(<Button />);
	});
	it('matches snapshot', ()=>{
		const snapshot=renderer.create(<Button />).toJSON();
		expect(snapshot).toMatchSnapshot();
	})
	it('render a button',()=>{
		const wrapper= shallow(<Button />);
		const buttons=wrapper.find('button')
		expect(buttons.length).toBe(1); 
	})
});
