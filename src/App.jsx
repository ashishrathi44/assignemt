import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const App = ({ onSubmit }) => {
  const [result, setResult] = useState("");
  const handleSubmit = async (values) => {
    setResult(JSON.stringify(values));
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", userName: "", mobile: "" }}
        validate={(values) => {
          let errors = {};
          if (!values.email) {
            errors.email = "Required";
          }
          if (!values.userName) {
            errors.userName = "Required";
          }
          if (!values.mobile) {
            errors.mobile = "Required";
          }
          // console.log(values);
          // console.log(errors);
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div>
              <label htmlFor="userName">User Name</label>
              <input
                id="userName"
                type="text"
                name="userName"
                onChange={(e) => setFieldValue("userName", e.target.value)}
              />
              <ErrorMessage
                data-testid="userNameError"
                name="userName"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              <ErrorMessage
                data-testid="emailError"
                name="email"
                component="div"
              />
            </div>
            <div>
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                type="text"
                name="mobile"
                onChange={(e) => setFieldValue("mobile", e.target.value)}
              />
              <ErrorMessage
                data-testid="mobileError"
                name="mobile"
                component="div"
              />
            </div>
            <br />
            <div id="result" name="result">
              {result}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
