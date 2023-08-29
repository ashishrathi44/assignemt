import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

it("rendering and submitting a basic Formik form", async () => {
  const { container } = render(<App />);
  const userName = container.querySelector('input[name="userName"]');
  const email = container.querySelector('input[name="email"]');
  const mobile = container.querySelector('input[name="mobile"]');
  const submit = container.querySelector('button[type="submit"]');
  const results = container.querySelector('div[name="result"]');
  await waitFor(() => {
    fireEvent.change(userName, {
      target: {
        value: "mockname"
      }
    });
  });
  await waitFor(() => {
    fireEvent.change(email, {
      target: {
        value: "mock@email.com"
      }
    });
  });

  await waitFor(() => {
    fireEvent.change(mobile, {
      target: {
        value: "green"
      }
    });
  });

  await waitFor(() => {
    fireEvent.click(submit);
  });

  expect(results.innerHTML).toContain(
    '{"email":"mock@email.com","userName":"mockname","mobile":"green"}'
  );
});
