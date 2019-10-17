import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ConfirmationSummary } from '../ConfirmationSummary'
import theme from '../../theme'
import en from '../../locales/en/messages.js'

const client = {
  readQuery: () => ({
    timeFrame: JSON.stringify({}),
    whatHappened: JSON.stringify({}),
    scammerDetails: JSON.stringify({}),
    impact: JSON.stringify({}),
    contactInfo: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

describe('<ConfirmationSummary />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <I18nProvider language={'en'} catalogs={{ en }}>
              <ConfirmationSummary />
            </I18nProvider>
          </ApolloProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
