import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { routesObject } from "./Routes";
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
          const expressionElement = route.layout === "user" ? (
            <Structure>
              {route.element}
            </Structure>
          ) : (
            <AdminStructure>
              {route.element}
            </AdminStructure>
          )

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

      </Routes>
    </>
  );
}
