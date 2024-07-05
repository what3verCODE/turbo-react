# Libraries usage
## Default project checks
- eslint TODO add configurations as it should be + FSD
- stylelint
- prettier
- syncpack (validate package.json)
- knip (check for unused exports/files) TODO
- million lint (works in runtime, frontend only) TODO check availability

## Unit project checks
- jest TODO add testing configs as package

## E2E project checks
- playwright

# Base frontend stack (TBD)
- react
- @tanstack/react-router
- redux-toolkit
- antd ? shadcn ? gravity ui ??
  - antd - cssinjs based, using css vars possible but unintuitive
  - gravity-ui - bad docs, strange props
  - shadcn - good as starter, require tailwind + scss (scss to style components with predefined classes from other libraries)
- formatjs (i18n) -- OR gravity ui i18n

# Base backend stack
- express
- http-proxy (proxy to backend via express app) / http-proxy-middleware

# UI docs (storybook?)

# Run project variants

## Production
NODE_ENV = production

## Development
NODE_ENV = development

## Testing
NODE_ENV = production
JEST = true
PLAYWRIGHT = true