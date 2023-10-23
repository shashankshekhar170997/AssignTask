import DashBoard from "./Components/DashBoard";

import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import React from "react";
import CreateAdd from "./Components/CreateAdd";
import AddInsights from "./Components/AddInsights";
function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/createAdd",
        element: <CreateAdd />,
      },
      {
        path: "/insights",
        element: <AddInsights />,
      },
    ],
  },
]);

export default App;
