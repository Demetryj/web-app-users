import styled from 'styled-components';
import { BiCopyright } from 'react-icons/bi';

export const FooterWrapper = styled.footer`
  /* position: absolute;
  left: 0;
  bottom: 0; */
  padding: ${p => p.theme.spacing(8)} 0;
  width: 100%;
  background-color: ${p => p.theme.colors.bgColorFooter};
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.spacing(2)};
`;

export const Text = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.17;
  letter-spacing: 0.03em;
  color: ${p => p.theme.colors.witeTextColor};
`;

export const FooterIcon = styled(BiCopyright)`
  color: ${p => p.theme.colors.witeTextColor};
`;
