export default function handler(req, res) {
  const schema = {
    type: "object",
    properties: {
      name: { type: "string" },
      reportDate: { type: "string", format: "date" },
      description: { type: "string" },
      signature: { type: "string" }, // assuming the signature field in the schema is of string type
    },
  };

  const uiSchema = {
    type: "object",
    properties: {
      name: { type: "string", title: "Name" },
      reportDate: { type: "string", format: "date", title: "Report Date" },
      description: { type: "string", title: "Description" },
      signature: { type: "customSignatureField", title: "Signature" }, // assuming you have a custom type 'customSignatureField' for the signature field
    },
  };

  res.status(200).json({ schema: schema, uischema: uiSchema });
}
