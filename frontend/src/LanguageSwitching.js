import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Trans, I18nProvider } from '@lingui/react'
import gql from 'graphql-tag'
import { P } from './components/paragraph'
import { i18n, defaultLocale } from './i18n'

i18n.activate(defaultLocale)

export const LanguageSwitching = ({ children }) => (
  <Query
    query={gql`
      {
        language @client
      }
    `}
  >
    {({ loading, error, data }) => {
      return (
        <I18nProvider i18n={i18n}>
          {loading ? (
            <P>
              <Trans>loading...</Trans>
            </P>
          ) : null}
          {error ? (
            <P color="crimson" fontWeight="bolder">
              Error
            </P>
          ) : null}
          {children}
        </I18nProvider>
      )
    }}
  </Query>
)

LanguageSwitching.propTypes = { children: PropTypes.node.isRequired }
