import axios from "axios";
import { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import AuthorBooks from '../components/AuthorBooks.jsx';

class AuthorsView extends Component {
    state = {
        authors: [],
    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:4040/authors?_embed=books');

        this.setState({authors: response.data})
    }

    render() {
        const { path, url } = this.props.match;
        return(
            <>
                <h1>This is authors page</h1>
                <ul>
                    {this.state.authors.map(author => (
                        <li key={author.id}>
                            <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
                        </li>
                    ))}
                </ul>
                <Route 
                path={`${path}/:authorId`} 
                render={props=> {
                    const bookId = Number(props.match.params.authorId);
                    const author = this.state.authors.find(author => author.id === bookId);

                    return author && <AuthorBooks {...props} books={author.books} />;
                }} 
                />
            </>
        )
    }
}
export default AuthorsView;