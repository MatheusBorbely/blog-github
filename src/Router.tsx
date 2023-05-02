import {Routes, Route} from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import {Home} from './pages/Home';
import { Post } from './pages/Post';


export function Router() {
    return (
        <Routes>
            <Route path='/' element={ <DefaultLayout />}>
                <Route path='/' element={ <Home />}/>
                <Route path='/post/:id' element={ <Post />}/>
            </Route>
        </Routes>
    )
}
  
