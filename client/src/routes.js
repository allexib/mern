import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const UseRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" exact>
                    <LinksPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/detail/:id">
                    <DetailPage/>
                </Route>
                <Navigate to="/create"/>
                {/*новый синтаксик*/}
                {/*<Route exact path="/links" element={LinksPage} />*/}
                {/*<Route exact path="/create" element={CreatePage} />*/}
                {/*<Route exact path="/detail/:id" element={DetailPage} />*/}
                {/*/!*<Navigate to="/create"/>*!/*/}
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Navigate to=""/>
        </Routes>
    )
}