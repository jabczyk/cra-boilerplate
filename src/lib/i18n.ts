import { enUS } from '../translations/en-US'
import { plPL } from '../translations/pl-PL'

type MessageKey = keyof typeof enUS
type Messages = Record<MessageKey | string, string>

export const messages: Record<string, Messages> = {
  en: enUS,
  'en-US': enUS,
  pl: plPL,
  'pl-PL': plPL
}
