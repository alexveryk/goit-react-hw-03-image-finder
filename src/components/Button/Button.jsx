import React from 'react';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onChange }) => {
  return (
    <>
      <ButtonLoadMore type="button" onClick={onChange}>
        Load More...
      </ButtonLoadMore>
    </>
  );
};
