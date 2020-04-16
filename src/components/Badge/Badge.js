import React from 'react'
import { Box, Button, DropButton, Text } from 'grommet'
import { Link } from 'react-router-dom'
import { FormDown, FormUp } from 'grommet-icons'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import DefaultAvatar from '../../images/simple-avatar.png'

const StyledAvatar = styled.img`
  border-radius: 100%;
  height: 2.5em;
  width: auto;
  margin-left: 0.75em;
  object-fit: cover;
`

const CapitalText = styled(Text)`
  line-height: 10px;
  text-transform: uppercase;
`

const DropItem = styled(Button)`
  display: flex;
  flex: 1

  :hover {
    background: #D8D8D8;
  }
`

const DropLink = styled(Link)`
  align-items: center
  background: ${props => props.disabled ? '#D8D8D8' : 'inherit'}
  display: flex;
  flex: 1
  pointer-events: ${props => props.disabled ? 'none' : 'all'}
  text-decoration: none;

  :hover {
    background: #D8D8D8;
  }
`

function Badge ({ disabled, isOpen, name, onAbout, role, setOpen, signOut, src }) {
  const Icon = isOpen ? FormUp : FormDown

  return (
    <Box align='center' direction='row' gap='xsmall'>
      <StyledAvatar alt={`${name} Avatar`} fallback={DefaultAvatar} src={src} />
      <Box>
        <Text weight='bold'>{name}</Text>
        <CapitalText color='dark-5' size='small'>{role}</CapitalText>
      </Box>
      <DropButton
        alignSelf='center'
        disabled={disabled}
        dropAlign={{ right: 'right', top: 'bottom' }}
        label={<Box><Icon/></Box>}
        dropContent={
          <Box background='white' height='8em' justify='between' width='5em' pad={{ vertical: 'xxsmall' }}>
            <DropLink
              disabled={onAbout}
              margin='1em'
              onClick={() => !onAbout && setOpen(false)}
              to='/about'
              tabIndex={onAbout ? -1 : undefined}
            >
              <CapitalText color='#5C5C5C' margin='1em'>Help</CapitalText>
            </DropLink>
            <DropLink
              disabled={!onAbout}
              margin='1em'
              onClick={() => onAbout && setOpen(false)}
              to='/projects'
              tabIndex={!onAbout ? -1 : undefined}
            >
              <CapitalText color='#5C5C5C' margin='1em'>Viewer</CapitalText>
            </DropLink>
            <DropItem label={<CapitalText margin='1em'>Log out</CapitalText>} onClick={signOut} plain />
          </Box>
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={isOpen}
        plain
      />
    </Box>
  )
}

Badge.defaultProps = {
  disabled: false,
  isOpen: false,
  name: '',
  onAbout: false,
  role: '',
  setOpen: () => {},
  signOut: () => {},
  src: DefaultAvatar
}

Badge.propTypes = {
  disabled: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  onAbout: PropTypes.bool,
  role: PropTypes.string,
  setOpen: () => {},
  signOut: PropTypes.func,
  src: PropTypes.string
}

export { DropLink }
export default Badge
