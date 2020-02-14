import React from "react";

class ArrayList extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: ["Amarillo", "Rojo", "Azul", "Verde"]
    };
  }

  sumaArray(list) {
    let suma = 0;
    list.map(number => {
      if (Array.isArray(number)) {
        number.map(n => {
          suma += n;
        });
      } else if (number !== null) {
        suma += number;
      }
    });
    console.log(suma);
  }

  render() {
    const lista1 = [1, 4, 3, 0];
    const lista2 = [1, 2, [5, 8], 4];
    const lista3 = [0, [6, 2], null, 7, 1];
    this.sumaArray(lista3);
    return (
      <div>
        <ul>
          {this.state.colors.map((color, i) => {
            return <li key={i}>{color}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ArrayList;
