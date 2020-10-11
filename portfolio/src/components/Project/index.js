import React from 'react';
import Portfolio from './portfolio';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Project() {
  //const { name, description } = currentCategory;
  return (
    <section>
      <h1 data-testid="h1tag"></h1>
      {/* <p>{description}</p> */}
      <Portfolio  />
    </section>
  );
}

export default Project;