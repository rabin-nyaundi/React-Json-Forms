import React from "react";
import { JsonForms } from "@jsonforms/react";
import SignatureField from "../components/SignatureField";

const App = () => {
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

  return (
    <div>
      <h1>My Form</h1>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        renderers={[
          { tester: () => true, renderer: SignatureField }, // registering the custom SignatureField component as a renderer for the custom 'customSignatureField' type
        ]}
      />
    </div>
  );
};

export default App;
