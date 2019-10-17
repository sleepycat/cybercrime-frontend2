import React from 'react'
import wait from 'waait'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MockedProvider } from 'react-apollo/test-utils'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'emotion-theming'
import { I18nProvider } from '@lingui/react'
import { ScammerDetailsForm } from '../ScammerDetailsForm'
import en from '../../../locales/en/messages.js'
import theme from '../../../theme'

const catalogs = { en }

const client = {
  readQuery: () => ({
    scammerDetails: JSON.stringify({}),
  }),
  writeData: jest.fn(),
}

const clickOn = element => fireEvent.click(element)

describe('<ScammerDetailsForm />', () => {
  afterEach(cleanup)

  it('calls the onSubmit function when the form is submitted', async () => {
    const submitMock = jest.fn()

    const { getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <MockedProvider mocks={[]} addTypename={false}>
            <I18nProvider language={'en'} catalogs={catalogs}>
              <ApolloProvider client={client}>
                <ScammerDetailsForm onSubmit={submitMock} />
              </ApolloProvider>
            </I18nProvider>
          </MockedProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
    const nextButton = getByRole('button')

    clickOn(nextButton)
    await wait(0) // Wait for promises to resolve

    expect(submitMock).toHaveBeenCalledTimes(1)
  })
})
