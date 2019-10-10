import React from 'react';
import styled from 'styled-components/native';

const View = styled.View`
  ${p => p.shadow && `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25)`};
  aspect-ratio: 1;
  ${p => p.height && `height: ${p.height}`};
  ${p => p.width && `width: ${p.width}`};
`;

const ImageElement = styled.Image`
  border-radius: ${p => p.radius ? p.radius : '0'};
  flex: 1;
  aspect-ratio: 1;
  resize-mode: contain;
`;

export const Image = ({ source, height, width, shadow, ...props }) => (
  <View shadow={shadow} height={height} width={width}>
    <ImageElement source={source} {...props} />
  </View>
);