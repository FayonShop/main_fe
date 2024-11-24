export default {
  defaultNamespace: 'translation',
  useKeysAsDefaultValue: true,
  locales: ['en', 'ua'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['src/**/*.{ts,tsx}'],
  sort: true,
  lexers: {
    ts: ['JavascriptLexer'],
    tsx: ['JsxLexer'],
  },
};
