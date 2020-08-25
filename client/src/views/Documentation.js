import React from "react";
import ApiTest from "../components/ApiTest";

const mockData = [
  {
    title: "Introduction",
    body: "Learn how to integrate our APIs into your application",
  },
  {
    title: "API Basics",
    body:
      "The API gives you access to pretty much all the features you can use on our dashboard and lets you extend them for use in your application. It strives to be RESTful and is organized around the main resources you would be interacting with - with a few notable exceptions.",
  },
  {
    title: "Sample Requests",
    body:
      "You can use Postman to test our APIs. Postman is an easy to use API development environment for making HTTP requests.",
    body2:
      "Alternatively, you can test with the sample api calls provided below.",
  },
];

const apiTest = [
  {
    title: "Get all states",
    description: "Get array of all states",
    url: "/polling-unit/state",
  },
  {
    title: "Get all local government from state",
    description: "Get array of all local governments in a state",
    url: "/polling-unit/lga?state=ABIA",
  },
  {
    title: "Get all wards from local governnment",
    description: "Get array of wards in a local government in a state",
    url: "/polling-unit/ward?state=ABIA&lga=BENDE",
  },
  {
    title: "Get all polling unit from ward",
    description: "Get array of all wards in a local government",
    url: "/polling-unit/unit?state=ABIA&lga=BENDE&ward=ITUMBAUZO",
  },
];

export default function Documentation() {
  return (
    <div className="container-sm">
      <h4>Documentation</h4>
      <br />
      {mockData.map((data, index) => (
        <div key={`${data.title}-${index}`}>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
          {data.body2 ? <p>{data.body2}</p> : null}
        </div>
      ))}
      {apiTest.map((test, i) => (
        <div key={`${test.title}-${i}`}>
          <ApiTest
            title={test.title}
            description={test.description}
            url={test.url}
          />
        </div>
      ))}
    </div>
  );
}
