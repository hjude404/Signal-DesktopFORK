// Copyright 2021 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonVariant } from './Button';

const story = storiesOf('Components/Button', module);

story.add('Kitchen sink', () => (
  <>
    {[
      ButtonVariant.Primary,
      ButtonVariant.Secondary,
      ButtonVariant.SecondaryAffirmative,
      ButtonVariant.SecondaryDestructive,
      ButtonVariant.Destructive,
    ].map(variant => (
      <React.Fragment key={variant}>
        <p>
          <Button onClick={action('onClick')} variant={variant}>
            Hello world
          </Button>
        </p>
        <p>
          <Button disabled onClick={action('onClick')} variant={variant}>
            Hello world
          </Button>
        </p>
      </React.Fragment>
    ))}
  </>
));

story.add('aria-label', () => (
  <Button
    aria-label="hello"
    className="module-ForwardMessageModal__header--back"
    onClick={action('onClick')}
  />
));
