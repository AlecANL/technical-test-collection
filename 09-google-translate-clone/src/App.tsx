import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useTranslate } from './hooks/useTranslate.ts'
import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { ArrowIcon } from './components/arrowIcon.tsx'
import { AUTO_LANGUAGE } from './const/supported-languages.ts'
import { LanguageSelector } from './components/languageSelector.tsx'
import { TextArea } from './components/textarea.tsx'
import { useEffect } from 'react'
import { translate } from './services/translate.service.ts'
import { useDebounce } from './hooks/useDebounce.ts'
import { ClipBoardIcon, MicIcon } from './components/icons.tsx'

function App (): JSX.Element {
  const {
    setFromLanguage,
    setToLanguage,
    interchangeLanguages,
    fromLanguage,
    toLanguage,
    fromText,
    result,
    setResult,
    isLoading,
    setFromText
  } = useTranslate()

  const debounceFromText = useDebounce(fromText, 500)

  useEffect(() => {
    if (fromText === '') {
      return
    }

    translate({
      fromText: debounceFromText, fromLanguage, toLanguage
    })
      .then((result) => {
        if (result === null) { return }
        setResult(result)
      })
      .catch(() => {
        setResult('Error')
      })
  }, [debounceFromText])

  function handleClipboard (): void {
    navigator.clipboard.writeText(result).catch((err) => {
      console.log('Something went wrong', err)
    })
  }

  function handleSpeech (): void {
    const utterance = new SpeechSynthesisUtterance(result)
    utterance.lang = 'es-MX'
    speechSynthesis.speak(utterance)
  }

  return (
    <>
      <Container fluid>
        <h1>Clone Google translate</h1>
        <Row >
          <Col >
            <Stack gap={2}>
              <LanguageSelector
                type='from'
                value={fromLanguage}
                onChange={setFromLanguage}
              />
              <TextArea
                placeholder='Enter somethind...'
                type='from'
                value={fromText}
                onChange={setFromText}
              />
            </Stack>
          </Col>
          <Col md={'auto'}>
            <Button className='change-btn' variant='link' disabled={ fromLanguage === AUTO_LANGUAGE } onClick={interchangeLanguages}>
              <ArrowIcon/>
            </Button>
          </Col>
          <Col className='result'>
            <Stack gap={2}>
              <LanguageSelector
                type='to'
                value={toLanguage}
                onChange={setToLanguage}
              />
              <div style={{ position: 'relative' }}>
                <TextArea
                  placeholder='Translation...'
                  type='to'
                  value={result}
                  isLoading={isLoading}
                  onChange={setResult}
                />
                <div
                  style={{ position: 'absolute', right: '0', top: '0', display: 'flex' }}
                >
                  <Button
                    variant='link'
                    onClick={handleClipboard}
                  >
                    <ClipBoardIcon />
                  </Button>
                  <Button
                    variant='link'
                    onClick={handleSpeech}
                  >
                    <MicIcon />
                  </Button>
                </div>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
