import React, { Component } from "react";
import { Button } from 'reactstrap';
import "../App.css";

class MovieLikeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            pictureUrl: '',
            commentMovie: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitForm(e) {
        e.preventDefault();
    }

    render() {
        return (
                <div className="FormEmployee container">
                    <h1 className="text-info">What is your favorite film?</h1>

                    <form onSubmit={this.submitForm}>
                        <fieldset>
                            <legend>Your movie</legend>
                            <div className="form-data form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    className="form-control"
                                    required="true"
                                />
                            </div>

                            <div className="form-data form-group">
                                <label htmlFor="pictureurl">Picture URL</label>
                                <input
                                    type="text"
                                    id="pictureurl"
                                    name="pictureurl"
                                    onChange={this.onChange}
                                    value={this.state.pictureUrl}
                                    className="form-control"
                                    required="true"
                                />
                            </div>

                            <div className="form-data form-group">
                                <label htmlFor="commentMovie">Pourquoi? un avis ?</label>
                                <textarea
                                    id="commentMovie"
                                    name="commentMovie"
                                    rows="5"
                                    onChange={this.onChange}
                                    value={this.state.commentMovie}
                                    className="form-control"
                                    required="true"
                                />
                            </div>
                            <hr />
                            <div className="form-data">
                                <Button color="info" type="submit" >Send your Movie!</Button>
                            </div>
                        </fieldset>
                    </form>
                </div>
        );
    }
}

export default MovieLikeForm;