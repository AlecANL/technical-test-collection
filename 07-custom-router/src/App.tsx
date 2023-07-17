import './App.css'
import {IRouter} from "./models/router.interface.ts";
import {Router} from "./components/router.tsx";
import {Route} from "./components/route.tsx";
import {lazy, Suspense} from "react";

const HomePage = lazy(() => import('./pages/home.tsx'))
const AboutPage = lazy(() => import('./pages/about.tsx'))
const Search = lazy(() => import('./pages/search.tsx'))





function App() {
  const routes: IRouter[] = [
    // {
    //   path: '/',
    //   Component: HomePage
    // },
    // {
    //   path: '/about',
    //   Component: AboutPage,
    // },
    // {
    //   path: '/search/:query',
    //   Component: Search,
    // }
  ]


  return (
    <>
      <main>
        <Suspense fallback={<h1>Loading ....</h1>}>
          <Router routes={routes}>
            <Route path='/' Component={HomePage}/>
            <Route path='/about' Component={AboutPage}/>
            <Route path='/search/:query' Component={Search}/>
          </Router>
        </Suspense>
      </main>
    </>
  )
}






export default App
