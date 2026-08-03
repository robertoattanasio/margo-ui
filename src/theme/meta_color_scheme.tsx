/**
 * Declares which colour schemes the document supports, before any stylesheet
 * has loaded - which is the only thing the meta does that the CSS
 * `color-scheme` property in variables.css cannot. It carries no colour, so it
 * never drifts from the design tokens.
 */
export const MetaColorScheme = () => <meta name="color-scheme" content="dark light" />;
