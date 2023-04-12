export const signatureFieldTester = (schema, path) => {
  return (
    schema.type === "string" &&
    schema.format === "data-url" &&
    path.endsWith("/signature")
  );
};
