import React from 'react';
import styled from 'styled-components/native';

export const Vert = styled.View`
  flex-direction: column;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
  padding: ${p => p.padding ? p.padding : '0'};
  margin: ${p => p.margin ? p.margin : '0'};
  border-radius: ${p => p.radius ? p.radius : '0'};
  elevation:4;
  ${p => p.shadow && `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25)`};
`;

export const Hori = styled.View`
  flex-direction: row;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
  border-radius: ${p => p.radius ? p.radius : '0'};
  padding: ${p => p.padding ? p.padding : '0'};
  margin: ${p => p.margin ? p.margin : '0'};
  ${p => p.shadow && `box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25)`};
`;

export const CentVert = styled(Vert)`
  align-items: center;
  justify-content: center;
`;

export const CentHori = styled(Hori)`
  align-items: center;
  justify-content: center;
`;