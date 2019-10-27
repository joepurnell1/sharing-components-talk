import React from 'react';
import styled from 'styled-components';

const ClearButtonElement = styled.button`
  border: none;
  text-decoration: none;
  ${p => p.margin && `margin: ${p.margin}`};
  ${p => p.width && `width: ${p.width}`};
  padding: 0;
`;

export const ClearButton = ({ onPress, children, margin, width, ...props }) => (
  <ClearButtonElement onClick={onPress} margin={margin} width={width} {...props}>{children}</ClearButtonElement>
);
