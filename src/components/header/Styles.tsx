import styled from 'styled-components';

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  text-align: center;
  margin-top: 5%;
  z-index: 1000;
`;

export const Anchor = styled.a`
  &:hover {
    color: #fff !important;
  }

  font-family: 'Poppins-Regular';
  text-decoration: none;
  color: #fff;
  padding: 0 20px;
`;

export const Container = styled.div`
  position: fixed;
  left: 79%;
  top: 7%;
  z-index: 1000;
`;

export const ButtonFixed = styled.a`
  &:hover {
    color: #5200ff;
    background: #fff;
  }

  font-family: 'SpaceMono-Regular';
  text-decoration-line: none;
  cursor: pointer;
  background: none;
  border: 1px solid #fff;
  border-radius: 30px;
  color: #fff;
  padding: 5px 20px;
`;
