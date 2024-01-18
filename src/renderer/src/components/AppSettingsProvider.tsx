import { ReactNode, useState } from 'react'
import { AppSettingsContext } from './AppSettings'

export const AppSettings = ({ children }: { children: ReactNode }) => {
  const [node, setNode] = useState('techcoderx.com')
  const [isCustomRPC, setIsCustomRPC] = useState(false)
  return (
    <AppSettingsContext.Provider value={{ node, setNode, isCustomRPC, setIsCustomRPC }}>{children}</AppSettingsContext.Provider>
  )
}
