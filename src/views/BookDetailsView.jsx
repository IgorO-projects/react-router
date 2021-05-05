import axios from "axios";
import { Component } from "react";

class BookDetailsView extends Component {
    state = {
        id: null,
        imgUrl: null,
        title: null,
        descr: null,
        genre: null,
    };

    async componentDidMount() {
        const { bookId } = this.props.match.params;
        const response = await axios.get(`http://localhost:4040/books/${bookId}`);
        
        this.setState({ ...response.data });
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h1>this page of current book {this.props.match.params.bookId}</h1>
                <img src={this.state.imgUrl} alt={this.state.title}/>
                <h2>{this.state.title}</h2>
                <p>{this.state.descr}</p>
            </>

        )
    }
}

export default BookDetailsView;