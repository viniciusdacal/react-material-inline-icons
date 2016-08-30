import React from 'react';
import * as Icons from 'react-material-inline-icons/Icon';
import css from './style.scss';

const Home = () => {
  return (
    <article>
      <section>
        <div className={css.grid}>
          {Object.keys(Icons).map(iconName => {
            return (
              <div key={iconName} className={css.gridItem}>
                {React.createElement(Icons[iconName])}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}

export default Home;
