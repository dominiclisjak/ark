import { selectAnatomy } from '@ark-ui/anatomy'
import { defineComponent } from 'vue'
import { ark, type HTMLArkProps } from '../factory'
import { useSelectContext } from './select-context'

export type SelectValueProps = HTMLArkProps<'span'>

export const SelectValue = defineComponent({
  name: 'SelectValue',
  props: {
    placeholder: {
      type: String,
    },
  },
  setup(props, { slots, attrs }) {
    const api = useSelectContext()

    return () => (
      <ark.span {...selectAnatomy.build().value.attrs} {...attrs}>
        {slots.default?.() || api.value.valueAsString || props.placeholder}
      </ark.span>
    )
  },
})
