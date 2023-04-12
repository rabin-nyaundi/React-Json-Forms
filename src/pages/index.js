import { useEffect, useState } from "react";
import axios from "axios";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { JsonForms } from "@jsonforms/react";
import SignatureField from "@/components/SignatureField";
import { signatureFieldTester } from "@/components/signatureFieldTester";

export default function Home() {
  const [formFields, setFormFields] = useState([]);
  const [data, setData] = useState();
  const [schema, setSchema] = useState();
  const [uischema, setUISchema] = useState();
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchForms();
  }, []);

  const renderers = [
    ...materialRenderers,
    { tester: () => true, renderer: SignatureField },
  ];

  const fetchForms = async () => {
    setLoading(true);
    const data = await fetch("/api/forms");
    const res = await data.json();
    setSchema(res?.schema);
    setUISchema(res?.uischema);
    setTitle(res?.schema?.title);
    setLoading(false);
  };

  const handleSubmitJson = () => {
    console.log(data);
  };

  if (loading && schema === undefined) {
    return (
      <>
        <p>Loading page</p>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-8 lg:w-2/3 xl:w-1/2 justify-center items-center h-full m-auto p-10">
      {schema === undefined ? (
        "Loading"
      ) : (
        <>
          <h1 className="text-xl font-bold">{title}</h1>
          <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={renderers}
            cells={materialCells}
            onChange={({ data, _errors }) => setData(data)}
          />
        </>
      )}
      <button
        className="bg-blue-600 text-white px-8 py-2"
        onClick={handleSubmitJson}
        color="primary"
      >
        send
      </button>
    </div>
  );
}
