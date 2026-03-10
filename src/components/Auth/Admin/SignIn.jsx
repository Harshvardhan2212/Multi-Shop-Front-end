import { useFormik } from "formik";
import * as Yup from "yup";
import { usePostAdminSignInDataMutation } from "../../../Redux/Slices/AdminAuthApis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [postAdminSignInData, { isLoading }] =
    usePostAdminSignInDataMutation();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,

    onSubmit: async (values, actions) => {
      try {
        const res = await postAdminSignInData(values);

        if (res?.data?.success) {
          localStorage.setItem("adminToken", res.data.token);

          toast.success(res.data.message);

          actions.resetForm();

          navigate("/admin");
        } else {
          toast.error(res?.data?.message || "Login failed");
        }
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>

        <div className="text-center mb-4">
          <h3 className="fw-bold">Admin Panel</h3>
          <p className="text-muted">Sign in to continue</p>
        </div>

        <form onSubmit={formik.handleSubmit}>

          <div className="mb-3">
            <label className="form-label">Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="admin@example.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.email && formik.errors.email && (
              <div className="text-danger small">
                {formik.errors.email}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {formik.touched.password && formik.errors.password && (
              <div className="text-danger small">
                {formik.errors.password}
              </div>
            )}
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default SignIn;
