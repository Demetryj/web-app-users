import styled from 'styled-components';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${p => p.theme.spacing(6)};
  border-spacing: ${p => p.theme.spacing(0)};
  box-shadow: ${p => p.theme.shadows.second};
`;

export const HeadCell = styled.th`
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.whiteColor};
  text-transform: uppercase;

  text-align: center;
  background-color: ${p => p.theme.colors.bgColorHeadTable};
  padding: ${p => p.theme.spacing(2.5)};

  :not(:last-child) {
    border-right: ${p => p.theme.borders.normal};
    border-color: ${p => p.theme.colors.whiteColor};
  }
`;

export const BodyRow = styled.tr`
  cursor: pointer;

  :nth-child(even) {
    background-color: ${p => p.theme.colors.bgTableStat};
  }

  :nth-child(odd) {
    background-color: ${p => p.theme.colors.bgColorTableMain};
  }
`;

export const BodyCell = styled.td`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.regular};
  color: ${p => p.theme.colors.secondaryFontColor};
  :first-child {
    text-transform: capitalize;
  }

  text-align: center;
  padding: ${p => p.theme.spacing(2.5)};

  border-left: ${p => p.theme.borders.normal};
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.borderColor};

  @media screen and (${p => p.theme.media.medium}) {
    min-width: 200px;
  }

  @media screen and (${p => p.theme.media.large}) {
    min-width: 300px;
  }
`;
