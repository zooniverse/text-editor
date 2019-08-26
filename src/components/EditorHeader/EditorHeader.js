import React from 'react'
import { Box, Heading, Text } from 'grommet'
import Badge from '../Badge'
import styled from 'styled-components'

const CapitalText = styled(Text)`
  text-transform: uppercase;
`

function EditorHeader (props) {
  return (
    <Box as='header' direction='row' pad={{ bottom: 'small' }} border='bottom'>
      <Box direction='row' justify='between' border='right' fill='horizontal'>
        <Box align='center'>
          <Heading level='2'>Text Transcription Project</Heading>
        </Box>
        <Box align='center' direction='row' gap='medium' pad={{ horizontal: 'medium' }}>
          <CapitalText color='medGray' size='small'>Download all data</CapitalText>
        </Box>
      </Box>
      <Badge />
    </Box>
  )
}


export default EditorHeader
