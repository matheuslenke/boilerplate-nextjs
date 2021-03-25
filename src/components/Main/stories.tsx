import Main from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Main',
  components: Main,
  args: {
    title: 'Title Default',
    description: 'Description Default'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'teste',
  description: 'teste'
}

export const Default: Story = (args) => <Main {...args} />
