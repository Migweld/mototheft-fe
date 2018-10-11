import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import HomepageBox from "../components/HomepageBox";
import bikeIcon from "../images/bikeIcon.png";
import mapPinIcon from "../images/mapIcon.png";
import chainIcon from "../images/chainIcon.png";

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module).add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>
).add('with some emoji', () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
));

storiesOf('Homepage Box', module).add('with bike', () => <HomepageBox
  icon={bikeIcon}
  title="30,000"
  subtitle="Motorcycles stolen in 2018"/>).add('with map', () => <HomepageBox icon={mapPinIcon} title="65%" subtitle="Stolen from the home"/>).add('with chain', () => <HomepageBox icon={chainIcon} title="4%" subtitle="Had motorcycle security"/>)