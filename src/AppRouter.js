import { Box, Typography } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import App from "./App";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondaty" align="center">
      {"Copyright "}
      softwareengineer, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default AppRouter;
