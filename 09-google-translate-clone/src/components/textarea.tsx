import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  placeholder: string
  value: string
  onChange: (value: string) => void
  isLoading?: boolean
  type: 'from' | 'to'
}

export const TextArea: React.FC<Props> = ({ onChange, value, isLoading, type }) => {
  const getPlaceholder = (type: 'from' | 'to', loading: boolean): string => {
    if (type === 'from') { return 'Enter something...' }
    if (loading) { return 'Loading...' }
    return 'Translation...'
  }
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    onChange(event.target.value)
  }

  return (
    <Form.Control
      as='textarea'
      value={value}
      className='text-area'
      disabled={type === 'to'}
      placeholder={getPlaceholder(type, isLoading ?? false)}
      onChange={handleChange}
      autoFocus={ type === 'from' }
    />
  )
}
