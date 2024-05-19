// @ts-check
import eslint from '@eslint/js'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  {
    plugins: {
      'jsx-a11y': pluginJsxA11y,
    },
    // @ts-expect-error expected
    rules: pluginJsxA11y.configs.recommended.rules,
  },
  // // eslintReactRecommended, // This is not yet working https://github.com/jsx-eslint/eslint-plugin-react/issues/3699
  ...tseslint.configs.recommended,
  { ignores: ['graphql-types.ts'] },
  eslintPluginPrettierRecommended
)
