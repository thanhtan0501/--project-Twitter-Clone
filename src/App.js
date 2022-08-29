// import { GoogleOAuthProvider } from "@react-oauth/google";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "~/layouts/DefaultLayout";
import { publicRoutes } from "~/routes";
// import { SessionProvider } from "next-auth/react";
// import Login from "./components/Login";
function App() {
    return (
        <Router>
            {/* <GoogleOAuthProvider
               
                clientId="990173576444-lqhrvfrtmara7acs047uk0lmr1a70ad0.apps.googleusercontent.com"
            > */}
            <div className="App">
                <Routes>
                    {publicRoutes.map((publicRoute, index) => {
                        const Page = publicRoute.component;
                        let Layout = DefaultLayout;

                        if (publicRoute.layout) {
                            Layout = publicRoute.layout;
                        } else if (publicRoute.layout === null) {
                            console.log("Lỗi: ", publicRoute.layout);

                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={publicRoute.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                    // <Login />
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
            {/* </GoogleOAuthProvider> */}
        </Router>
    );
}

export default App;
