import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(3)};

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryFontColor};
  background-color: ${p => p.theme.colors.bgColorHeadTable};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.light};

  transition: ${p => p.theme.transitions.main};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.witeTextColor};
    background-color: ${p => p.theme.colors.accentColor};
  }

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: 1.19;
  }

  & svg {
    width: 20px;
    height: 20px;

    @media screen and (${p => p.theme.media.large}) {
      width: 30px;
      height: 30px;
    }
  }
`;
