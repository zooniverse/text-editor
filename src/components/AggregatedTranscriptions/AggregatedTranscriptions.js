import React from 'react'
import { Box, Button, Text } from 'grommet'
import styled from 'styled-components'
import { bool, func, shape} from 'prop-types'
import { observer } from 'mobx-react'
import Overlay from '../Overlay'
import TranscriptionTable from './components/TranscriptionTable'
import LineViewer from '../LineViewer'

const StyledBox = styled(Box)`
  position: relative;
`

const AbsoluteBox = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  width: auto;
`

const OverflowBox = styled(Box)`
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background-color: #BABABA;
    border: 5px solid transparent;
    border-radius: 1em;
    background-clip: content-box;
  }
  &::-webkit-scrollbar {
    border-radius: 0.5em;
  }
  &::-webkit-scrollbar {
    background: white;
    width: 0.9em;
  }
`

function AggregatedTranscriptions ({ addLine, isViewer, margin, showOverlay, showTranscription }) {
  return (
    <StyledBox height='large'>
      <Box background='white' fill='vertical' margin={margin} round='xsmall'>
        <Box
          align='center'
          border={{ color: 'light-5', side: 'bottom' }}
          direction='row'
          justify='between'
          pad={{ left: '1em', right: 'xsmall', bottom: 'xsmall', top: 'xsmall' }}
        >
          <Text size='1em'>Transcribed Text</Text>
          <Button
            disabled={isViewer}
            label={<Text size='small'>ADD LINE</Text>}
            onClick={addLine}
            plain
          />
        </Box>
        <OverflowBox fill='vertical'>
          <TranscriptionTable />
        </OverflowBox>
        {(showOverlay || showTranscription) && (
          <AbsoluteBox background={{ color: 'white', opacity: 'medium' }} fill margin={margin} opacity='0.5' round='xsmall'>
            <Overlay />
          </AbsoluteBox>
        )}
      </Box>
      {showTranscription && (
        <AbsoluteBox align='center' background='transparent' pad={{ right: 'small' }} fill justify='center'>
          <LineViewer />
        </AbsoluteBox>
      )}
    </StyledBox>
  )
}

AggregatedTranscriptions.propTypes = {
  addLine: func,
  isViewer: bool,
  margin: shape(),
  showOverlay: bool,
  showTranscription: bool
}

AggregatedTranscriptions.defaultProps = {
  addLine: () => {},
  isViewer: false,
  margin: {},
  showOverlay: false,
  showTranscription: false
}

export default observer(AggregatedTranscriptions)
