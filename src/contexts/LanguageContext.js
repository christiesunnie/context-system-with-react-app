import React from "react";

// // Created the default value to pass it into the parent component
// export default React.createContext("english");

// Combining the Redux app with Context
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onLanguageChange: this.onLanguageChange,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
