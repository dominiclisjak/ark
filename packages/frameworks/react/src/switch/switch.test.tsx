import { switchAnatomy } from '@ark-ui/anatomy'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { vi } from 'vitest'
import { Switch, SwitchControl, SwitchLabel, SwitchThumb, type SwitchProps } from '.'
import { getExports, getParts } from '../setup-test'

const ComponentUnderTest = (props: SwitchProps) => {
  return (
    <Switch {...props}>
      <SwitchControl>
        <SwitchThumb />
      </SwitchControl>
      <SwitchLabel>Label</SwitchLabel>
    </Switch>
  )
}

describe('Switch', () => {
  it.each(getParts(switchAnatomy))('should render part! %s', async (part) => {
    render(<ComponentUnderTest />)
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(switchAnatomy))('should export %s', async (part) => {
    expect(Switch[part]).toBeDefined()
  })

  it('should toggle state when clicked', async () => {
    const onCheckedChange = vi.fn()
    render(<ComponentUnderTest onCheckedChange={onCheckedChange} />)
    const switchControl = screen.getByRole('checkbox')
    await user.click(switchControl)

    expect(onCheckedChange).toHaveBeenCalledWith({ checked: true })
  })

  it('should not toggle when disabled', async () => {
    const onCheckedChange = vi.fn()

    render(<ComponentUnderTest onCheckedChange={onCheckedChange} disabled />)
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled')

    const switchControl = screen.getByRole('checkbox')
    await user.click(switchControl)

    expect(onCheckedChange).not.toHaveBeenCalled()
  })

  it('should show invalid attribute when invalid', async () => {
    render(<ComponentUnderTest invalid />)
    const switchControl = screen.getByRole('checkbox')

    expect(switchControl).toHaveAttribute('aria-invalid', 'true')
  })

  it('should be required when required is true', async () => {
    render(<ComponentUnderTest required />)
    const switchControl = screen.getByRole('checkbox')

    expect(switchControl).toHaveAttribute('required')
  })
})
