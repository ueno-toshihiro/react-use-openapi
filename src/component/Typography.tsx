import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

export const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

const BaseHeader = styled(Typography)(({ theme }) => ({
  fontFamily
}));

type Props = {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  style?: React.CSSProperties;
  children: React.ReactElement | string;
};

export default function Headers({ type = 'h5', style, children }: Props): React.ReactElement {
  switch (type) {
    case 'h1':
      return (
        <BaseHeader variant="h1" sx={{ fontSize: '1.4em', ...style }}>
          {children}
        </BaseHeader>
      );
    case 'h2':
      return (
        <BaseHeader variant="h2" sx={{ fontSize: '1.2em', ...style }}>
          {children}
        </BaseHeader>
      );
    case 'h3':
      return (
        <BaseHeader variant="h3" sx={{ fontSize: '1em', ...style }}>
          {children}
        </BaseHeader>
      );
    case 'h4':
      return (
        <BaseHeader variant="h4" sx={{ fontSize: '1em', ...style }}>
          {children}
        </BaseHeader>
      );
    case 'h5':
      return (
        <BaseHeader variant="h5" sx={{ fontSize: '1em', ...style }}>
          {children}
        </BaseHeader>
      );
    case 'h6':
      return (
        <BaseHeader variant="h6" sx={{ fontSize: '0.8em', ...style }}>
          {children}
        </BaseHeader>
      );
    default:
      return (
        <BaseHeader variant="h5" sx={{ fontSize: '1em', ...style }}>
          {children}
        </BaseHeader>
      );
  }
}


