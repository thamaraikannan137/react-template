'use client'

// React Imports
import { useEffect } from 'react'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useLayoutInit from '@core/hooks/useLayoutInit'

// Style Import
import '@layouts/styles/index.css'

const LayoutWrapper = props => {
  // Props
  const { systemMode, verticalLayout, horizontalLayout } = props

  // Hooks
  const { settings } = useSettings()

  // Initialize layout
  useLayoutInit(systemMode)

  // Effect: Add skin class to body
  useEffect(() => {
    document.body.classList.add('layout-wrapper')
    
    return () => {
      document.body.classList.remove('layout-wrapper')
    }
  }, [])

  // Return the layout based on the layout context
  return (
    <div className='flex flex-col flex-auto' data-skin={settings.skin}>
      {settings.layout === 'horizontal' ? horizontalLayout : verticalLayout}
    </div>
  )
}

export default LayoutWrapper 