import React from 'react';
import { shallow, mount } from 'enzyme';
import { Nav, Navbar, NavLink, NavItem, NavbarBrand } from "reactstrap";

import Header from '../Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header/>)
  });

  it('renders the navbar', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it('renders the logo', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(NavbarBrand).length).toEqual(1);
    expect(wrapper.find('#logo-img').length).toEqual(1);
  });
});