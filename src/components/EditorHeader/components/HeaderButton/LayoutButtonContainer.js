import React from 'react'
import { Box } from 'grommet'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import AppContext from 'store'
import HeaderButton from './HeaderButton'

function LayoutButtonContainer() {
  const store = React.useContext(AppContext)
  const onClick = e => { store.classifier.toggleLayout() }
  const rowShade = store.classifier.layout === 'row' ? '#555555' : '#CCCCCC'
  const columnShade = store.classifier.layout === 'column' ? '#555555' : '#CCCCCC'

  return (
    <HeaderButton
      icon={
        <Box direction='row' gap='xxsmall'>
          <FontAwesomeIcon color={rowShade} icon={faPause} size='xs' />
          <FontAwesomeIcon color={columnShade} icon={faPause} rotation={90} size='xs' />
        </Box>
      }
      label={'Layout'}
      onClick={onClick}
    />
  )
}

export default observer(LayoutButtonContainer)
