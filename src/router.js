import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/main";
import Listagem from "./pages/listagem";


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/fornecedores" exact component={Listagem} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
