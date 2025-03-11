const Ferments = () => {
  //@ts-ignore
  return React.createElement("div", {}, [
    //@ts-ignore
    React.createElement("h1", {}, "Kimchi"),
    //@ts-ignore
    React.createElement("p", {}, "Zuurkool"),
  ]);
};

const App = () => {
  //@ts-ignore
  return React.createElement(
    "div", 
    {}, 
    [   //@ts-ignore
        React.createElement(Ferments),
        //@ts-ignore
        React.createElement(Ferments),
        //@ts-ignore
        React.createElement(Ferments)
    ]);
};

const container = document.getElementById("root");
//@ts-ignore
const root = ReactDOM.createRoot(container);
//@ts-ignore
root.render(React.createElement(App));
