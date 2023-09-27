import { datePickerAnatomy } from '@ark-ui/anatomy'
import { DatePicker } from '.'
import { getExports } from '../setup-test'

describe('Date Picker', () => {
  it.skip.each(getExports(datePickerAnatomy))('should export %s', async (part) => {
    // @ts-expect-error TODO
    expect(DatePicker[part]).toBeDefined()
  })
})
