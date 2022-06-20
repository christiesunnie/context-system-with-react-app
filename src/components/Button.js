import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // // Using the default value to get the data into the nested child components
  // static contextType = LanguageContext;
  renderButton(color) {
    return (
      <button className={`ui button ${color} `}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "Gui di")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // // Using the default value to get the data into the nested child components
    // const text = this.context === "english" ? "Submit" : "Gui di";

    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
