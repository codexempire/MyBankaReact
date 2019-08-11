import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from './enzyme';
import { User, Home } from '../src/components/Demo_Components';
import App from '../src/components/App';
import Routes from '../src/components/route';
import Header from '../src/components/header';

describe('User tests', () => {
  it('renders User page with a username', () => {
    const username = 'codexempire';
    const expectedString = `Welcome to the users route ${username}`;
    const wrapper = shallow(<User username={username} />);

    expect(wrapper.find('.user').text()).toEqual(expectedString);
    expect(wrapper.find('.user').hasClass('logged')).toEqual(true);
    expect(wrapper.find('.homeButton').props().children).toEqual('To Home');
  });

  it('renders a User page without a logged user', () => {
    const expectedString = 'This is the user route';
    const wrapper = shallow(<User />);

    expect(wrapper.find('.user').text()).toEqual(expectedString);
    expect(wrapper.find('.user').hasClass('unlogged')).toEqual(true);
    expect(wrapper.find('.homeButton').props().children).toEqual('To Home');
  });
});

describe('Home tests', () => {
  it('renders applications Home page', () => {
    const expectedString = 'Here is the home route';
    const wrapper = shallow(<Home />);

    expect(wrapper.props().children.props.className).toEqual('home');
    expect(wrapper.find('.home').text()).toEqual(expectedString);
  });
});

describe('App', () => {
  it('should render the App component correctly', () => {
    const shallowWrapper = shallow(<App><User /></App>);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
    expect(shallowWrapper.find('User')).toBeTruthy();
  });
});

describe('Routes', () => {
  it('should render the routes for the application correctly', () => {
    const shallowWrapper = shallow(<Routes />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});

describe('Header', () => {
  it('should render the header for the application correctly', () => {
    const shallowWrapper = shallow(<Header />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});
