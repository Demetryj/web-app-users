import styled from 'styled-components';
import bgImageMobile from '../../images/bg-image-mobile.jpg';
import bgImageMobile2x from '../../images/bg-image-mobile@2x.jpg';
import bgImageTablet from '../../images/bg-image-tablet.jpg';
import bgImageTablet2x from '../../images/bg-image-tablet@2x.jpg';
import bgImageLaptop from '../../images/bg-image-laptop.jpg';
import bgImageLaptop2x from '../../images/bg-image-laptop@2x.jpg';

export const Wrapper = styled.div`
  padding: ${p => p.theme.spacing(15)} ${p => p.theme.spacing(4)};

  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${bgImageMobile});

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${bgImageMobile2x});
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (${p => p.theme.media.medium}) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${bgImageTablet});

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${bgImageTablet2x});
    }

    @media screen and (${p => p.theme.media.large}) {
      padding: ${p => p.theme.spacing(20)} 0;

      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${bgImageLaptop});
      @media (min-device-pixel-ratio: 2),
        (-webkit-min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: linear-gradient(
            to right,
            rgba(47, 48, 58, 0.4),
            rgba(47, 48, 58, 0.4)
          ),
          url(${bgImageLaptop2x});
      }
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.spacing(6)};

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.62;
  letter-spacing: 0.06em;
  text-align: center;
  color: ${p => p.theme.colors.witeTextColor};

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p => p.theme.spacing(10)};
    font-size: ${p => p.theme.fontSizes.mb};
    line-height: 1.36;
  }
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.spacing(6)};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xm};
  line-height: 1.3;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${p => p.theme.colors.witeTextColor};

  @media screen and (${p => p.theme.media.large}) {
    margin-bottom: ${p => p.theme.spacing(10)};
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const LinkBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 32px;
  font-family: inherit;
  font-style: inherit;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: ${p => p.theme.colors.witeTextColor};
  background-color: ${p => p.theme.colors.buttonColor};

  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.light};
`;
