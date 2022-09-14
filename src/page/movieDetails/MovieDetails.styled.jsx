import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  text-decoration: none;
  border-radius: 2px;
  font-size: ${p => p.theme.fontSizes.m} ;
`;
