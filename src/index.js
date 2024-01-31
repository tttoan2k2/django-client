import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
    uri: "https://27df-59-153-237-109.ngrok-free.app/graphql/",
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>
);

reportWebVitals();
