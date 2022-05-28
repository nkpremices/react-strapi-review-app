import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SiteHeader from "./components/SiteHeader";
import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql', cache: new InMemoryCache()
})


function App() {
    return (<div className="App">
        <ApolloProvider client={client}>
            <Router>
                <SiteHeader/>
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path="/details/:id" element={<ReviewDetails/>}/>
                    <Route path="/category/:id" element={<Category/>}/>
                </Routes>
            </Router>
        </ApolloProvider>
    </div>);
}

export default App;
