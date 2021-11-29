import styled from 'styled-components';

interface IDotnav {
  background?: string;
  display: string;
  justifyContent: string;
  width: string;
  height: string;
  borderRadius: string;
  border: string;
  margin: string;
  whiteSpace: string;
}

export const Anchor = styled.a<{ dotnav: IDotnav }>`
  text-decoration: none;
  background: ${(props) => props.dotnav.background};
  display: ${(props) => props.dotnav.display};
  justify-content: ${(props) => props.dotnav.justifyContent};
  width: ${(props) => props.dotnav.width};
  height: ${(props) => props.dotnav.height};
  border-radius: ${(props) => props.dotnav.borderRadius};
  border: ${(props) => props.dotnav.border};
  margin: ${(props) => props.dotnav.margin};
  white-space: ${(props) => props.dotnav.whiteSpace};
`;

const dotnavDefault = {
  background: '',
  display: 'flex',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  border: '1px solid #fff',
  margin: '10px 0',
  whiteSpace: 'nowrap'
};

Anchor.defaultProps = {
  dotnav: dotnavDefault
};

export const dotnav = dotnavDefault;

export const dotnavActive = { ...dotnavDefault, background: '#fff' };

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: end;
  margin-right: 5%;
  height: 100vh;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
    margin-right: 0;
  }
`;

export const DotnavContainer = styled.div`
  position: fixed;
  left: 13%;
  z-index: 2000;

  @media only screen and (max-width: 1130px) {
    left: 5%;
  }

  @media only screen and (max-width: 980px) {
    display: none;
  }
`;

export const Span = styled.span`
  @font-face {
    font-family: Poppins-Regular;
    src: url('../../assets/fonts/poppins/Poppins-Regular.ttf');
  }

  color: #fff;
  display: block;
  font-family: Poppins-Regular !important;
  margin-right: 9em;
  margin-top: -0.1em;

  @media only screen and (max-width: 1130px) {
    display: none;
  }
`;

export const Img = styled.img`
  position: absolute;
  bottom: 37%;
  left: 23%;
  width: 83%;

  @media only screen and (max-width: 1130px) {
    bottom: 40%;
  }

  @media only screen and (max-width: 1000px) {
    /* width: 85%; */
    bottom: 42%;
  }
`;
