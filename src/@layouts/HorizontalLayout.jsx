'use client'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { horizontalLayoutClasses } from './utils/layoutClasses'

const HorizontalLayout = ({ children }) => {
  // Hooks
  const { settings } = useSettings()

  return (
    <div className={classnames(horizontalLayoutClasses.root, 'flex flex-col min-h-screen')}>
      {/* Add horizontal navigation and navbar here */}
      <main className={classnames(horizontalLayoutClasses.content, 'flex-grow')}>
        {children}
      </main>
      {/* Add footer here */}
    </div>
  )
}

export default HorizontalLayout 