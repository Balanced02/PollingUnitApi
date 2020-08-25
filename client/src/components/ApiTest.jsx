import React, { useState } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { useApiCall } from "../utils/api";
import Button from "./elements/Button";

export default function ApiTest({ title, url, description }) {
  const [state, setState] = useState(null);
  const { callApi } = useApiCall();

  const makeApiCall = () => {
    callApi(url)
      .then((data) => {
        let stringData = JSON.stringify(data);
        setState(stringData);
      })
      .catch((err) => {
        let stringData = JSON.stringify(err?.response);
        setState(stringData);
      });
  };

  return (
    <div>
      <h5>{title}</h5>
      <p>{description}</p>
      <CodeBlock
        text={`${url}`}
        language={"javascript"}
        showLineNumbers={false}
        theme={dracula}
      />
      <Button tag="button" color="primary" wideMobile onClick={makeApiCall}>
        Test
      </Button>
      {state && (
        <div>
          <h4>Result:</h4>
          <CodeBlock
            text={state}
            language={"json"}
            showLineNumbers={false}
            theme={dracula}
          />
        </div>
      )}
      <br />
    </div>
  );
}
