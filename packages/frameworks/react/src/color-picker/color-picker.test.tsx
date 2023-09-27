import { colorPickerAnatomy } from '@ark-ui/anatomy'
import { ColorPicker } from '.'
import { getExports } from '../setup-test'

describe('ColorPicker', () => {
  it.skip.each(getExports(colorPickerAnatomy))('should export %s', async (part) => {
    // @ts-expect-error TODO
    expect(ColorPicker[part]).toBeDefined()
  })
})
