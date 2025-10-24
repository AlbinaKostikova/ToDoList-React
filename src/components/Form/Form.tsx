import { useState } from 'react'
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './form.styled'
import plusIcon from '../../assets/images/plus.png'
export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>('')

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (text.trim()) {
      props.createNewToDo(text)
      setText('')
    }
  }

  return (
    <FormWrapper>
      <FormBlock action='#' onSubmit={formSubmit}>
        <FormLabel>
          <FormField type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Введите задачу" />
        </FormLabel>
        <FormControl icon={plusIcon} />
      </FormBlock>
    </FormWrapper>
  )
}
