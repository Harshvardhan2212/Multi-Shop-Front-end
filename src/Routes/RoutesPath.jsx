import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { routesObject, AdminRoute } from "./Routes";
import Structure from "../layout/Structure";
import ErrorPage from "../components/Common/ErrorPage";
import Breadcrumbs from "./Breadcrumbs";
import ProtectedRoute from "./ProtectedRoute";
import LoginProtectedRoute from "./LoginProtectedRoute";
import AdminStructure from "../layout/AdminStructure";

export default function RoutesPath() {

  return (
    <>
      <Routes>
        {routesObject.map((route, index) => {
          const expressionElement = route.layout ? (
            <Structure>
              {route.element}
            </Structure>
          ) : (route.element);

          return (
            <Route
              key={index}
              element={
                route.isAuth ? (
                  <>
                    <ProtectedRoute>
                      {expressionElement}
                    </ProtectedRoute>
                  </>
                ) : route.isLoggedIn ? (
                  <LoginProtectedRoute>
                    {expressionElement}
                  </LoginProtectedRoute>
                ) : (
                  expressionElement
                )
              }
              path={route.path}
            >
            </Route>
          )
        })}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin/" >
          {AdminRoute.map((route, index) => {
            const expressionElement = route.layout ? (
              <AdminStructure>
                {route.element}
              </AdminStructure>
            ) : (route.element);
            return (
              <Route
                key={index}
                element={
                  route.isAuth ? (
                    <>
                      <ProtectedRoute type="admin">
                        {expressionElement}
                      </ProtectedRoute>
                    </>
                  ) : route.isLoggedIn ? (
                    <LoginProtectedRoute type="admin">
                      {expressionElement}
                    </LoginProtectedRoute>
                  ) : (
                    expressionElement
                  )
                }
                path={route.path}
              >
              </Route>
            )
          })}
        </Route>

      </Routes>
    </>
  );
}
