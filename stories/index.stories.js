import React from 'react';

import { storiesOf } from '@storybook/react';
import { Box, Grommet } from 'grommet';
import FilmstripViewer from '../src/components/FilmstripViewer'
import zooTheme from '@zooniverse/grommet-theme'

storiesOf('FilmstripViewer', module)
  .add('Default', () => (
    <Grommet theme={zooTheme}>
      <Box background='#D8D8D8' height='xlarge'>
        <FilmstripViewer />
      </Box>
    </Grommet>
  ))
