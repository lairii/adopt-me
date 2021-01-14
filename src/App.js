// Pet component without destructuring the props
// const Pet = props => {
//     return React.createElement("div", {}, [
//         React.createElement('h1', {}, props.name),
//         React.createElement('h2', {}, props.animal),
//         React.createElement('h2', {}, props.breed),
//     ])
// }

const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement('h1', {}, name),
        React.createElement('h2', {}, animal),
        React.createElement('h2', {}, breed),
    ])
}

const App = () => {
    return React.createElement(
        "div",
        {id: "pets"},
        [
            React.createElement("h1", {}, "Adopt me!"),
            React.createElement(Pet, {name: "Pepper", animal: "Dog", breed: "Cockatiel"}),
            React.createElement(Pet, {name: "Doink", animal: "Cat", breed: "Mixed"}),
            React.createElement(Pet, {name: "Luna", animal: "Dog", breed: "Havanese"})
        ]
    )
}

ReactDOM.render(
    React.createElement(App), 
    document.querySelector('#root')
)