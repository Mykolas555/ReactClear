import React, { useState } from 'react';
import Article from "../article/Article";
import AddArticle from "../addArticle/AddArticle";

const Main = () => {
//clicked: Tai kintamasis, kuris saugo dabartinės būsenos reikšmę. 
//Pradžioje jis inicializuojamas kaip false, nes tai yra pradinė būsena.
//setClicked Tai funkcija, kuri leidžia pakeisti clicked kintamojo reikšmę. 
//Kai ši funkcija yra iškviesta su nauja reikšme, React perrenderina komponentę su nauja būsena.
  const [clicked, setClicked] = useState(false);
//posts: Tai kintamasis, kuris saugo dabartinę būsenos reikšmę. 
//Pradžioje jis inicializuojamas kaip tuščias masyvas ([]), 
//nes tai yra pradinė būsena skirta laikyti naujienų įrašus.
//setPosts: Tai funkcija, kuri leidžia pakeisti posts kintamojo reikšmę. 
//Kai ši funkcija yra iškviesta su nauja reikšme (pavyzdžiui, nauju masyvu), 
//React perrenderina komponentę su nauja būsena.
  const [posts, setPosts] = useState([]);
// Būsena, kuri kontroliuoja įvedimo formos matomumą
  const [showInput, setShowInput] = useState(false); 

  // Funkcija, kuri valdo "Paspaudziau" mygtuko paspaudimą
  const handleClick = () => {
    setClicked(true);
  }

  // Funkcija, kuri gautus naujienų duomenis prideda prie sąrašo ir paslepia įvedimo formą
  const handleFromData = (data) => {
    // Sugeneruojamas unikalus id naujienai
    const newId = Date.now().toString();

    // Nustatoma būsena su tik nauja naujiena
    setPosts([{ ...data, id: newId }]);
    // Paslepiama įvedimo forma po duomenų išsaugojimo
    setShowInput(false);
  }

  // Funkcija, kuri keičia įvedimo formos matomumą
  const toggleInput = () => {
    setShowInput(!showInput);
  }

  return (
    <main>
      <div className="container">
        <h1>Naujienos</h1>
        {posts.map((post) =>
          <Article key={post.id} title={post.title} description={post.description} />
        )}
      </div>
      <div className="container">
        <h2>Prideti naujiena</h2>
        {/* Mygtukas, kuris keičia įvedimo formos matomumą */}
        <button onClick={toggleInput} className="btn btn-primary">Rodyti/išjungti įvedimo formą</button>
        {/* Įvedimo forma rodoma tik tada, kai showInput būsena yra true */}
        {showInput && <AddArticle onSave={handleFromData} />}
      </div>
      {/* "Paspaudziau" mygtukas ir susijęs turinys */}
      <div className="container">
        <button onClick={handleClick} className="btn btn-primary">Paspaudziau</button>
        {clicked ? <h1>mygtukas yra paspaustas</h1> : <div>kazkas kitas</div>}
      </div>
    </main>
  );
}

export default Main;