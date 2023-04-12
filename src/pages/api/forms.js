export default function handler(req, res) {
  const schema = {
    title: "CHILD RUNAWAY REPORT",
    description: "A simple form description",
    type: "object",
    properties: {
      name: {
        type: "string",
        minLength: 5,
      },
      id: {
        type: "string",
        minLength: 1,
      },
      report_date: {
        type: "string",
        format: "date",
      },
      incident_description: {
        type: "string",
      },
      runaway_investigation: {
        type: "string",
      },
      primary_root_cause: {
        type: "string",
      },
      secondary_root_cause: {
        type: "string",
      },
      report_written_by: {
        type: "string",
      },

      report_written_to: {
        type: "string",
      },
      // signature: {
      //   type: "string",
      // },
      test: {
        type:"string"
      }
    },
    required: ["name", "report_date", "report_written_by"],
  };

  const uiSchema = {
    type: "VerticalLayout",
    elements: [
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/name",
            "ui:title": "Enter your name",
          },
          {
            type: "Control",
            scope: "#/properties/id",
          },
        ],
      },
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/incident_description",
          },
          {
            type: "Control",
            scope: "#/properties/runaway_investigation",
          },
        ],
      },
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/primary_root_cause",
          },
          {
            type: "Control",
            scope: "#/properties/secondary_root_cause",
          },
        ],
      },
      {
        type: "HorizontalLayout",
        elements: [
          {
            type: "Control",
            scope: "#/properties/report_written_by",
          },
          {
            type: "Control",
            scope: "#/properties/report_date",
          },
        ],
      },

      // {
      //   type: "HorizontalLayout",
      //   elements: [
      //     {
      //       type: "Control",
      //       scope: "#/properties/report_written_to",
      //     },
      //     {
      //       type: "Control",
      //       scope: "#/properties/test",
      //     },
      //   ],
      // },

      // {
      //   type: "HorizontalLayout",
      //   elements: [
      //     {
      //       type: "signatureField",
      //       scope: "#/properties/signature",
      //       options: {
      //         type: "signatureCanvas",
      //       },
      //     },
      //   ],
      // },
    ],
  };

  res.status(200).json({ schema: schema, uischema: uiSchema });
}
