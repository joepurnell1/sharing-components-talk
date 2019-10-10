import React from 'react';
import styled from 'styled-components';
import { Image } from '../image';
import { ClearButton } from '../button';

export const Play = ({ onPress, size = '28px' }) => (
  <ClearButton onPress={onPress}>
    <Image source={require('../../assets/playArrow.png')} height={size} width={size} />
  </ClearButton>
);

export const Pause = ({ onPress, size = '28px' }) => (
  <ClearButton onPress={onPress}>
    <Image source={require('../../assets/pause.png')} height={size} width={size} />
  </ClearButton>
);

export const Stop = ({ onPress, size = '28px' }) => (
  <ClearButton onPress={onPress}>
    <Image source={require('../../assets/stop.png')} height={size} width={size} />
  </ClearButton>
);

export const FastForward = ({ onPress, size = '28px' }) => (
  <ClearButton onPress={onPress}>
    <Image source={require('../../assets/fastForward.png')} height={size} width={size} />
  </ClearButton>
);

export const Rewind = ({ onPress, size = '28px' }) => (
  <ClearButton onPress={onPress}>
    <Image source={require('../../assets/rewind.png')} height={size} width={size} />
  </ClearButton>
);