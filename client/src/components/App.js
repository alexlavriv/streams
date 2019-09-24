import React from 'react'
// using plain router instead of browser router to support the manual history object
import {Router, Route, Switch} from 'react-router-dom'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import Header from './Header'
import history from '../history'
const App = () =>{
 return (<div  className="ui container">
   
{/* the router will use the object history instead of it's default implementation 
    we are using our implamitation of the history in order to support programatic navigation*/}
     <Router history={history}>
     <div>
     <Header />
     <Switch>
         <Route path="/"                exact component={StreamList} />
         <Route path="/streams/new"       component={StreamCreate} />
         <Route path="/streams/edit/:id"     exact component={StreamEdit} />
         <Route path="/streams/delete/:id"   exact component={StreamDelete} />
         <Route path="/streams/:id"     exact component={StreamShow} />
    </Switch>
         </div>
     </Router>
 </div>)
}

export default App