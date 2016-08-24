import React from 'react';
import Icon from './Icon';
import { storiesOf, action } from '@kadira/storybook';
import svgIcons from './svg';

storiesOf('Icon', module)
.add('default view', () =>
  (
    <div style={{ display: 'flex' }}>
      {Object.keys(svgIcons).map((name) =>
        <span style={{ padding: '10px', display: 'inline-flex' }}>
          <Icon name={name} />
        </span>
      )}
    </div>
  )
)
.add('custom icon', () =>
  (
    <div style={{ display: 'flex' }}>
      {Object.keys(svgIcons).map((name) =>
        <span style={{ padding: '10px', display: 'inline-flex' }}>
          <Icon
            name={name}
            size="lg"
            label="Ok"
            color="#4E8BDA"
          />
        </span>
      )}
    </div>
  )
);
