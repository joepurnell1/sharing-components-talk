import React from 'react';
import styled from 'styled-components';

export const Vert = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
  box-shadow: ${p => p.shadow && '0px 1px 3px rgba(0, 0, 0, 0.25)'};
  border-radius: ${p => p.radius ? p.radius : '0'};
  padding: ${p => p.padding ? p.padding : '0'};
  margin: ${p => p.margin ? p.margin : '0'};
`;

export const Hori = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${p => p.backgroundColor ? p.backgroundColor : 'transparent'};
  box-shadow: ${p => p.shadow && '0px 1px 3px rgba(0, 0, 0, 0.25)'};
  border-radius: ${p => p.radius ? p.radius : '0'};
  padding: ${p => p.padding ? p.padding : '0'};
  margin: ${p => p.margin ? p.margin : '0'};
`;

export const CentVert = styled(Vert)`
  align-items: center;
  justify-content: center;
  display: inline-flex;
`;

export const CentHori = styled(Hori)`
  align-items: center;
  justify-content: center;
  display: inline-flex;
`;