/*
 name: Name of the service.
 port: Which port the service runs on.
 address: Base URL for hitting our services.
 description: Describe the purpose / boundaries of the service.
 notes.content: Add any additional notes about this service.
 endpoints.name: A quick accurate name for the endpoint.
 endpoints.path: Endpoint location.
 endpoints.public: Whether the endpoint is public or private.
 endpoints.auth: Weather or not the endpoint requires authentication.
 endpoints.method: Which Http request method is used.
 endpoints.contentType: If applicable, what content type should be set.
 endpoints.usesParameters: Tells the page whether or not to render parameters for the endpoint.
 endpoints.parameters.name: Name of the parameter.
 endpoints.parameters.type: Whether it is a string, int, etc.
 endpoints.parameters.required: Whether or not the parameter is required.
 endpoints.parameters.sampleValue: A sample value for the parameter.
 endpoints.parameters.note: A note / description of the parameter.
 endpoints.usesHeaders: Tells the page whether or not to render headers for the endpoint.
 endpoints.headers.name: Name of the header.
 endpoints.headers.type: Whether it is a string, int, etc.
 endpoints.headers.required: Whether or not the header is required.
 endpoints.headers.sampleValue: A sample value for the header.
 endpoints.headers.note: A note / description of the header.
 endpoints.responseStructure.name: The name of the field that will be returned in the response.
 endpoints.responseStructure.type: The type that the response will be of.
 endpoints.responseStructure.description: A description for the specific key.
 endpoints.responseStructureJson: You can opt to put in a json string instead of filling out response structure section.
 endpoints.curls.curl: A sample curl command to hit this endpoint.
 endpoints.curls.description: A description surrounding the specific curl.
 endpoints.setup.content: content for that specific step.

*/

let sampleService = {
  name: "sample service",
  dateLastUpdated: "April 19, 2020",
  port: 8080,
  address: "docs.spotlight.com",
  description: "A description for the sample service. \nhello hello",
  notes: [
    {
      content: "a sample note in case anything should be said here.",
    },
    {
      content: "another note to show what can be done.",
    },
  ],
  endpoints: [
    {
      name: "Count",
      path: "/api/sample/v1/count",
      public: true,
      auth: true,
      method: 'GET',
      contentType: "N/A",
      description: "A description for the endpoint!",
      usesParameters: true,
      parameters: [
        {
          name: "user",
          type: "String",
          required: false,
          sampleValue: "cbeiler",
          note: "a note for a parameter",
        },
      ],
      requiresHeaders: true,
      headers: [
        {
          name: "content-type",
          type: "String",
          required: true,
          sampleValue: "application/json",
          note: "This lets the server know the content type.",
        },
      ],
      responseStructure: [
        {
          name: "key",
          type: "String",
          description: "One value returned within the response.",
        },
      ],
      responseStructureJson: "",
      curls: [
        {
          curl: "curl localhost:8080/api/sample/v1/count",
          description: "A description for the curl statement",
        }
      ],
      setup: [
        {
          content: "Do something.",
        },
        {
          content: "Do something else.",
        },
        {
          content: "Do something a third time.",
        },
      ],
    },
  ],
}


export default sampleService;