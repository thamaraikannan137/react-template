// React Imports
import { useEffect } from 'react'

// Hook Imports
import { useSettings } from './useSettings'

const useLayoutInit = systemMode => {
  // Hooks
  const { settings, saveSettings } = useSettings()

  useEffect(() => {
    if (systemMode) {
      saveSettings({ ...settings, mode: systemMode })
    }
  }, [systemMode])
}

export default useLayoutInit 