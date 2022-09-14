import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Button = styled(Link)`
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  border-radius: 2px;
  margin-bottom: 10px;
`;

export const H1 = styled.h1`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.l};
`;

export const Text = styled.p`
  margin-bottom: 20px;
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.xm};
  color: ${p => p.theme.colors.text};
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.xm};
`;

export const Nav = styled.li`
  margin-top: 10px;
`;

export const Item = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: 600;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Ul = styled.ul`
  list-style: none;
  //padding-left: 20px;
  padding: 0;
  text-decoration: none;
`;
