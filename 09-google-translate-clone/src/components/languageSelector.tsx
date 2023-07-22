import React from 'react'
import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../const/supported-languages.ts'
import { type FromLanguage, type Language } from '../models/translate-reducer.interface.ts'

type Props =
  | { type: 'from', value: FromLanguage, onChange: (languageCode: Language) => void }
  | { type: 'to', value: Language, onChange: (languageCode: Language) => void }

export const LanguageSelector: React.FC<Props> = ({ onChange, value, type }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    onChange(event.target.value as Language)
  }

  return (
    <>
      <Form.Select aria-label="Default select example" onChange={handleChange} value={value as string}>
        { type === 'from' && <option value="auto">Detect language</option> }
        { Object.entries(SUPPORTED_LANGUAGES).map(([languageCode, languageName]) => (
          <option key={languageCode} value={languageCode}>{languageName}</option>
        )) }
      </Form.Select>
    </>
  )
}
