import type { ColorChannelInputProps } from '@zag-js/color-picker'
import { computed, defineComponent, type PropType } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import type { Assign } from '../types'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerChannelInputProps = Assign<HTMLArkProps<'input'>, ColorChannelInputProps>

export const ColorPickerChannelInput = defineComponent({
  name: 'ColorPickerChannelInput',
  props: {
    channel: {
      type: String as PropType<ColorPickerChannelInputProps['channel']>,
      required: true,
    },
    orientation: {
      type: String as PropType<ColorPickerChannelInputProps['orientation']>,
    },
  },
  setup(props, { attrs }) {
    const api = useColorPickerContext()

    const channelProps = computed(() => ({
      channel: props.channel,
      orientation: props.orientation,
    }))

    const inputProps = computed(() => ({
      ...api.value.getChannelInputProps(channelProps.value),
      modelValue: api.value.value,
    }))

    return () => <ark.input {...inputProps.value} {...attrs} />
  },
})
