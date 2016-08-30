import React from 'react';
import * as Icons from 'react-material-inline-icons/Icon';

const Home = () => {
  return (
    <article>
      <section>
        {Object.keys(Icons).map(iconName => Icons)}
      </section>
    </article>
  );
}

export default Home;
