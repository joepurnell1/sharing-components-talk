import React from 'react';
import styled from 'styled-components';

const ImageElement = styled.img`
  ${p => p.height && `height: ${p.height}`};
  ${p => p.width && `width: ${p.width}`};
  aspect-ratio: 1;
  ${p => p.shadow && `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25)`};
  border-radius: ${p => p.radius ? p.radius : '0'};
`;

export const Image = ({ source, height, width, ...props }) => (
  <ImageElement src={source} height={height} width={width} {...props} />
);