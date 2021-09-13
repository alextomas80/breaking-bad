import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ThemeProvider } from "styled-components";

import { startGetCharacters } from "./redux/store/actions/characters";
import CharacterPage from "./pages/CharacterPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import Spinner from "./components/Spinner";
import theme from "theme";

function App() {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(startGetCharacters());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/character/:id" component={CharacterPage} />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
