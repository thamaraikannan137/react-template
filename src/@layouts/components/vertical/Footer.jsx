'use client'

// MUI Imports
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

// Styled Component Imports
import StyledFooter from '@layouts/styles/vertical/StyledFooter'

const Footer = () => {
  // Hooks
  const { settings } = useSettings()

  // Vars
  const { contentWidth } = settings

  return (
    <StyledFooter className={classnames(verticalLayoutClasses.footer)}>
      <Box className='footer-content-container'>
        <Box className='flex items-center justify-between py-4'>
          <Typography variant='body2'>
            © {new Date().getFullYear()} {themeConfig.templateName}. All rights reserved.
          </Typography>
          <Box className='flex items-center gap-4'>
            {/* Add your footer links here */}
          </Box>
        </Box>
      </Box>
    </StyledFooter>
  )
}

export default Footer 