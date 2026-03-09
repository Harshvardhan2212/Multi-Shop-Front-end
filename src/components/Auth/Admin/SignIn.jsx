import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePostAdminSignInDataMutation } from "../../../Redux/Slices/AdminAuthApis";

const SignIn = () => {

  const initialValues = {
    email: "",
    password: "",
  };

  const [postAdminSignInData] = usePostAdminSignInDataMutation();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values) => {

    // login API call here
  };

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>

        <div className="text-center mb-4">
          <h3 className="fw-bold">Admin Panel</h3>
          <p className="text-muted">Sign in to continue</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
                placeholder="admin@example.com"
              />
              <div className="text-danger small">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
              <div className="text-danger small">
                <ErrorMessage name="password" />
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-dark">
                Sign In
              </button>
            </div>

          </Form>
        </Formik>

      </div>
    </div>
  );
};

export default SignIn;
