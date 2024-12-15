import React from "react";
import propTypes from "prop-types";
import "./List.css";

function List(props) {
  const itemList = props.items;
  const category = props.category;
  //   const fruits = [
  //     { id: 1, name: "apple", calories: 95 },
  //     { id: 2, name: "orange", calories: 45 },
  //     { id: 3, name: "banana", calories: 105 },
  //     { id: 4, name: "coconuts", calories: 159 },
  //     { id: 5, name: "pineapple", calories: 37 },
  //   ];
  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); APHABETICALLY
  //   fruits.sort((a, b) => a.name.localeCompare(a.name)); REVERSE ALPHABETICALLY
  //   fruits.sort((a, b) => a.calories - b.calories); NUMERICALLY
  //   fruits.sort((a, b) => b.calories - a.calories); REVERSE NUMERICALLY

  //   const lowCalFruit = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruit = fruits.filter((fruit) => fruit.calories > 100);
  const ListItem = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <div>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{ListItem}</ol>
    </div>
  );
}

List.propTypes = {
  category: propTypes.string,
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      calories: propTypes.string,
    })
  ),
};
List.defaulProps = {
  category: "Category",
  items: [],
};
export default List;


// in App.jsx
// function App() {
//   const fruits = [
//     { id: 1, name: "apple", calories: 95 },
//     { id: 2, name: "orange", calories: 45 },
//     { id: 3, name: "banana", calories: 105 },
//     { id: 4, name: "coconuts", calories: 159 },
//     { id: 5, name: "pineapple", calories: 37 },
//   ];

//   const Vegetables = [
//     { id: 6, name: "potatoes", calories: 110 },
//     { id: 7, name: "calery", calories: 15 },
//     { id: 8, name: "carrots", calories: 25 },
//     { id: 9, name: "corn", calories: 63 },
//     { id: 10, name: "brocoli", calories: 50 },
//   ];

//   // const select = id <= 5 ? "Fruits" : "Vagetable";
//   return (
//     <div>
//       {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
//       {fruits.length > 0 ? (
//         <List items={Vegetables} category="vegetables" />
//       ) : null}
//     </div>
//   );
// }