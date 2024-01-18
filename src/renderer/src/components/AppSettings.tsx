import { createContext } from 'react'

export const nodeList = [
  'techcoderx.com',
  'api.hive.blog',
  'api.openhive.network',
  'api.deathwing.me',
  'api.hive.blue',
  'api.c0ff33a.uk',
  'api.pharesim.me',
  'anyx.io',
  'hived.emre.sh',
  'hive-api.arcange.eu',
  'rpc.ausbit.dev',
  'api.shmoogleosukami.co.uk',
  'hiveapi.actifit.io',
  'hive-api.3speak.tv',
  'rpc.mahdiyari.info',
  'Custom RPC...'
]

export interface AppState {
  node: string
  setNode: (newNode: string) => void

  isCustomRPC: boolean
  setIsCustomRPC: (newIsCustomRPC: boolean) => void
}

const defaultSettings: AppState = {
  node: nodeList[0],
  setNode: () => {},

  isCustomRPC: false,
  setIsCustomRPC: () => {}
}

export const AppSettingsContext = createContext<AppState>(defaultSettings)
