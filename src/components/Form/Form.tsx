import { useState } from 'react'
import './Form.scss'

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
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label>
          <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Введите задачу" />
        </label>
        <button type="submit"></button>
      </form>
    </div>
  )
}
