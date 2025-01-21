import { Component } from "react";
import pin from "./assets/pin.svg";
import trash from "./assets/trash.svg"

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: [],
    };

    onChangeEvent(e) {
        this.setState({ userInput: e });
    }

    addItem(input) {
        if (input === "") {
        alert("Please enter an item");
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({ groceryList: listArray, userInput: "" });
        }
    }

    deleteItem(index) {
        let listArray = this.state.groceryList;
        listArray.splice(index, 1);
        this.setState({groceryList: listArray});
    }

    deleteAllItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ groceryList: listArray });
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle("crossed");
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    <input
                        type="text"
                        placeholder="What do you want to buy today?"
                        onChange={(e) => {
                            this.onChangeEvent(e.target.value);
                        }}
                        value={this.state.userInput}
                    />
                </div>
                <div className="btn-container">
                    <button
                        onClick={() => this.addItem(this.state.userInput)}
                        className="btn btn-add"
                    >
                        Add{" "}
                    </button>
                    <ol>
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                {item}
                                <button 
                                    onClick={() => this.deleteItem(index)}
                                    className="delete"
                                >
                                    <img src={trash} width='30px' alt="delete"></img>
                                </button>
                            </li>
                        ))}
                    </ol>
                    <button
                        onClick={() => this.deleteAllItem()}
                        className="btn btn-delete"
                    >
                        Delete all
                    </button>
                </div>
                </form>
            </div>
        );
    }
}
