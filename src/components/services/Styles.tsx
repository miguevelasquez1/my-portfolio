import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 90vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Square = styled.div<{ squareStyle: any }>`
  position: relative;
  width: 300px;
  height: ${(props) => props.squareStyle.height};
  margin: 0 50px;
  background-color: #000;
`;

export const squareDefault = {
  height: '420px'
};

export const squareExtended = {
  height: '580px'
};

export const squareExtendedTwo = {
  height: '480px'
};

export const Title = styled.h2`
  font-family: SpaceMono-Bold;
  margin-top: 50%;
  margin-left: 20px;
  color: #fff;
`;

export const UnorderedListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 340px;
`;

export const UnorderedListContainerTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

export const UnorderedList = styled.ul<{ transition: any }>`
  color: #fff;
  font-family: 'Poppins-Regular';
  list-style-type: none;
  padding: 0;
  text-align: center;
  opacity: ${(props) => props.transition.opacity};
  transition: ${(props) => props.transition.transition};
`;

export const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  margin-left: 45%;
  margin-bottom: 10px;
  bottom: 0;
  left: 0;
`;
