import "./App.css";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPAge";
import HomePage from "./pages/HomePage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
];

function App() {
  return <></>;
}

export default App;
