import React from 'react';
import { LoaderStyle } from './Loader.styled';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => (
  <LoaderStyle>
    {
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    }
  </LoaderStyle>
);

export default Loader;
