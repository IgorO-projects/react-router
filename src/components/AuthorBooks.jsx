import { Link } from "react-router-dom"

const AuthorBooks = ({ books }) => {
    return (
        <ul>
            {books.map(book => (
            <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>))}
        </ul>
    )
}

export default AuthorBooks;

// import { Component } from "react";

// class AuthorBooks extends Component {
//     state = {
//         books: [],
//     };

//     componentDidMount() {
//         console.log('componentDidMount');
        
//         const id = Number(this.props.match.params.authorId);
//         const { books } = this.props.authors.find(author => author.id === id);
        
//         this.setState({ books });
//     };

//     componentDidUpdate(prevProps, prevState) {
//         console.log(Number(this.props.match.params.authorId));
//         console.log(this.props.authors);
//     }

//     render() {
//         return (
//             <>
//                 <h1>Author's book component</h1>
//                 <ul>
//                     {this.state.books.map(book => (<li key={book.id}>{book.title}</li>))}
//                 </ul>
//             </>
//         )
//     }
// }

// export default AuthorBooks;