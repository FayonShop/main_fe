import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout/BasicLayout";
import ContentPage from "./pages/ContentPage/ContentPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<BasicLayout/>}>
    <Route index element={<ContentPage/>}/>

    <Route path="*" element={<NotFoundPage/>}/>
  </Route>
));

export default function AppRoutes() {
  return <RouterProvider router={router}/>;
}
