import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: "babanas" }]
    };
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _handleKeyDown = event => {
    if (event.key === "Enter") {
      console.log("enter pressed", event);

      const newItem = {
        text: event.target.value
      };
      console.log("new item created", newItem);

      console.log("state was", this.state);

      console.log("new state.items will be", this.state.items.concat(newItem));

      const updatedList = this.state.items.concat(newItem);

      console.log("updating state to be ", updatedList);

      this.setState({
        items: updatedList
      });

      console.log("state is now ", this.state.items);
    }
  };

  render() {
    const listItems = this.state.items.map(key => {
      <li>{this.state.items[key].text}</li>;
    });
    return (
      <>
        <div>
          <p>TODO -- see src/components/OrderedList.jsx</p>
          <div> STATE </div>
          <hr />
          <input
            ref={a => (this._input = a)}
            data-testid="add-item"
            onKeyDown={this._handleKeyDown}
            placeholder="add an item"
          />
          <button>⬇️⬆️</button>
          <button>️🆑</button>
        </div>
        <br />

        <h1>Rendered List</h1>
        <ul>{listItems}</ul>
      </>
    );
  }
}

export default App;
