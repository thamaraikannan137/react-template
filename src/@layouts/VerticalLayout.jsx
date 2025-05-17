// React Imports
import { useState } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'
import StyledContentWrapper from './styles/vertical/StyledContentWrapper'

// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses'

// Styled Components
const MainContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('lg')]: {
    paddingLeft: 0
  }
}))

const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(4)
  }
}))

const VerticalLayout = props => {
  // Props
  const { navbar, footer, navigation, children } = props

  // Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  // States
  const [navVisible, setNavVisible] = useState(false)

  // Toggle navigation visibility
  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <div className={classnames(verticalLayoutClasses.root, 'flex flex-auto')}>
      {navigation || null}
      <StyledContentWrapper
        className={classnames(verticalLayoutClasses.contentWrapper, 'flex flex-col min-is-0 is-full')}
      >
        {navbar || null}
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </StyledContentWrapper>
    </div>
  )
}

export default VerticalLayout 