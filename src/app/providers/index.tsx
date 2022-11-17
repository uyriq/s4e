import compose from 'compose-function'
import { withRouter } from './with-router'
import { withMantine } from './with-mantine' // CSS-styler

const withProviders = compose(withRouter, withMantine) // ! порядок

export { withProviders }
