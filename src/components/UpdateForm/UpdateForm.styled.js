import styled from 'styled-components';

export const Form = styled.form`
  /* position: relative; */

  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(6)};
  /* padding: ${props => props.theme.spacing(4)}; */

  overflow-y: scroll;
  width: 90vw;
  height: 90vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* width: */

  /* border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.normal};
  border-color: ${props => props.theme.colors.borderColor}; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${props => props.theme.spacing(4)};
  padding: ${props => props.theme.spacing(4)};
  /* width: 100%;
  height: 100%; */

  overflow-y: scrol;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (${p => p.theme.media.medium}) {
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing(8)};
  }
  @media screen and (${p => p.theme.media.large}) {
    flex-wrap: wrap;
    gap: ${props => props.theme.spacing(12)};
  } ;
`;

export const Title = styled.h3`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryFontColor};

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(1)};

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryFontColor};

  &:focus-within {
    color: ${props => props.theme.colors.accentColor};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${props => props.theme.fontSizes.xm};
  }
`;

export const Input = styled.input`
  padding: ${props => props.theme.spacing(2)};

  font-family: inherit;
  font-weight: ${props => props.theme.fontWeights.regular};
  font-size: ${props => props.theme.fontSizes.m};

  border-radius: ${props => props.theme.radii.light};

  &:placeholder-shown {
    border-color: ${props => props.theme.colors.borderColor};
  }

  &:not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.accentColor};

    @media screen and (${p => p.theme.media.large}) {
      padding: ${props => props.theme.spacing(3)};
      font-size: ${props => props.theme.fontSizes.l};
    }
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
