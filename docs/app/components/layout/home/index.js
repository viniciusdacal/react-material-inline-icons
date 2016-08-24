import React from 'react';
import { Icon } from 'react-material-inline-icons';
import Icons from 'react-material-inline-icons/Icon/svg';

const Home = () => {
  return (
    <article>
      <section>
        {Object.keys(Icons).map(iconName => <Icon name={iconName} key={iconName}/>)}
      </section>
    </article>
  );
}

export default Home;
