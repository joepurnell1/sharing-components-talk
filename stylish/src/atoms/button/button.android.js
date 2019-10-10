import React from 'react';
import styled from 'styled-components/native';

const ClearButtonElement = styled.TouchableHighlight`
  ${p => p.margin && `margin: ${p.margin}`};
  ${p => p.width && `width: ${p.width}`};
  padding: 0;
`;

export const ClearButton = ({ onPress, children, margin, width }) => (
  <ClearButtonElement onPress={onPress} margin={margin} width={width}>{children}</ClearButtonElement>
);
