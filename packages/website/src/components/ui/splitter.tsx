import * as Ark from '@dominiclisjak/react/src/splitter'
import { styled } from 'styled-system/jsx'
import { splitter, type SplitterVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export * from '@dominiclisjak/react/src/splitter'
export type SplitterProps = Ark.SplitterProps & SplitterVariantProps

const SplitterRoot = withProvider(styled(Ark.Splitter.Root), 'root')
export const SplitterPanel = withContext(styled(Ark.Splitter.Panel), 'panel')
export const SplitterResizeTrigger = withContext(
  styled(Ark.Splitter.ResizeTrigger),
  'resizeTrigger',
)

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})
