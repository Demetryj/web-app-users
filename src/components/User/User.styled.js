import styled from 'styled-components';

export const MainTitle = styled.h2`
  margin-bottom: ${p => p.theme.spacing(2)};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryFontColor};

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.xxl};
    line-height: 1.19;
  }
`;

export const ItemTitle = styled.p`
  margin: ${p => p.theme.spacing(2)} 0;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryFontColor};
  text-decoration: underline;

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.19;
  }
`;

export const Subtitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.primaryFontColor};

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.19;
  }
`;

export const Value = styled.span`
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.secondaryFontColor};

  @media screen and (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.fontSizes.l};
    line-height: 1.19;
  }
`;

export const Box = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
`;
