import styled from 'styled-components';

export const WrapperFilter = styled.div`
  margin: 0 auto ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(2)};
  width: 300px;

  border: ${props => props.theme.borders.normal};
  border-radius: ${props => props.theme.radii.light};
  border-color: ${props => props.theme.colors.borderColor};
  box-shadow: ${props => props.theme.shadows.second};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};

  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.primaryFontColor};

  &:focus-within {
    color: ${props => props.theme.colors.accentColor};
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
  }
`;
