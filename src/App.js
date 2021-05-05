import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView.jsx';
import AuthorsView from './views/AuthorsView.jsx';
import BooksView from './views/BooksView.jsx';
import NotFoundView from './views/NotFoundView.jsx';
import BookDetailsView from './views/BookDetailsView.jsx';

function App() {
  return (
    <>
    <ul>
      <li>
        <NavLink 
        exact
        to="/" 
        className="nav__link" 
        activeClassName="nav__link_active">Home
        </NavLink>
      </li>
      <li>
        <NavLink 
        to="/authors" 
        className="nav__link" 
        activeClassName="nav__link_active">Authors
        </NavLink>
      </li>
      <li>
        <NavLink 
        to="/books" 
        className="nav__link" 
        activeClassName="nav__link_active">Books
        </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/authors" component={AuthorsView} />
      <Route exact path="/books" component={BooksView} />
      <Route path="/books/:bookId" component={BookDetailsView} />
      <Route component={NotFoundView}/>
    </Switch>
    </>
  );
}

export default App;
