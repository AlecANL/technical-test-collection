import { OpenAIApi, Configuration, ChatCompletionRequestMessageRoleEnum } from 'openai'
import { SUPPORTED_LANGUAGES } from '../const/supported-languages.ts'

const apiKey = import.meta.env.VITE_OPENAI_API_KEY

const configuration = new Configuration({
  apiKey
})

const openai = new OpenAIApi(configuration)

export async function translate (parameters: any): Promise<string> {
  const { fromLanguage, toLanguage, text } = parameters as unknown as any

  const messages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: 'You are a AI that translate text. You receive a text from the user. Do not answer, just translate the text. ' +
        'The original language is surrounded by `{{` and `}}`. You can also receive {{auto}} which means that you have to detect the language. ' +
        'The language you translate to is surrounded by `[[` and `]]`.'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'Hola mundo {{Spanish}} [[English]]'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: 'Hello world'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'How are you? {{auto}} [[English]]'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: 'hoe gaat het met u?'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: 'Bon dia, com estas? {{auto}} [[Español]]'
    },
    {
      role: ChatCompletionRequestMessageRoleEnum.Assistant,
      content: 'Buenos días, ¿cómo estás?'
    }
  ]

  const fromCode = fromLanguage === 'auto' ? 'auto' : (SUPPORTED_LANGUAGES as unknown as any)[fromLanguage]
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      ...messages,
      {
        role: ChatCompletionRequestMessageRoleEnum.User,
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        content: `${text} {{${fromCode}}} [[${toLanguage}]]`
      }
    ]
  })

  return completion.data.choices[0]?.message?.content ?? 'Fatal error. Cannot translate.'
}
