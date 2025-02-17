import { dialogAnatomy } from '@ark-ui/anatomy'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Portal } from '@zag-js/react'
import { vi } from 'vitest'
import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  type DialogProps,
} from '.'
import { getExports, getParts } from '../setup-test'

const ComponentUnderTest = (props: DialogProps) => (
  <Dialog {...props}>
    <DialogTrigger>Open dialog</DialogTrigger>
    <Portal>
      <DialogBackdrop />
      <DialogContainer />
      <DialogContent>
        <DialogTitle>Dialog title</DialogTitle>
        <DialogDescription>Dialog description</DialogDescription>
        <div>
          <input placeholder="Enter name..." />
          <button>Save</button>
        </div>
        <DialogCloseTrigger>Close</DialogCloseTrigger>
      </DialogContent>
    </Portal>
  </Dialog>
)

describe('Dialog', () => {
  it.each(getParts(dialogAnatomy))('should render part! %s', async (part) => {
    render(<ComponentUnderTest />)
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(dialogAnatomy))('should export %s', async (part) => {
    expect(Dialog[part]).toBeDefined()
  })

  it('should invoke onClose if dialog is closed', async () => {
    const onClose = vi.fn()
    render(<ComponentUnderTest open onOpenChange={onClose} />)
    await user.click(screen.getByText('Close'))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
