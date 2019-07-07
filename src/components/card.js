const { jsx } = require("theme-ui");

function Card({ selectable, ...props }) {
  return jsx(
    "div",
    Object.assign({}, props, {
      sx: {
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 5px 0px",
        backgroundColor: "background",
        borderRadius: "5px",
        transition: "all 0.2s ease 0s",
        userSelect: selectable ? "text" : "none",
        margin: "1.5em -2em 3em",
        padding: "1em 2em",
        "@media (max-width: 720px)": {
          boxShadow: "none",
          borderRadius: 0,
          margin: 0,
          padding: "1em 0.5em"
        }
      }
    })
  );
}

module.exports = Card;
