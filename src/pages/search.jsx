import React, { use, useState } from "react";
import * as mainData from "/mainData.json";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Products from "../components/home/Products";

export default function search() {
  const { products } = mainData;
  const router = useRouter();
  const [word, setWord] = useState();
  const [results, setResults] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const _word = document.getElementById("busqueda-input").value;

    router.replace(`/${"search"}?word=${_word}`);
  };

  useEffect(() => {
    if (router.query.word) {
      const word1 = router.query.word.toLowerCase();

      setResults(
        products.filter((product) => {
          const word2 = product.name.toLowerCase();
          console.log(word2, word1);
          return word2.includes(word1);
        })
      );
      setWord(word1);
    }
  }, [router.query.word]);

  return (
    <>
      <div
        className="card bg-secondary text-center text-white d-flex py-4 mb-4"
        style={{ borderRadius: 15 }}
      >
        {/* <div className="text-center">
          <p className="mx-auto mb-3">Buscar palabra clave o:</p>
        </div> */}
        <div className="busqueda-container mx-auto mb-3">
          <form onSubmit={submitHandler}>
            <input
              defaultValue={word}
              type="text"
              id="busqueda-input"
              placeholder="Buscar..."
            />
            <button type="submit" id="buscar-btn">
              Buscar
            </button>
          </form>
        </div>
      </div>
      <h5 className="mb-4">Resultados para "{word}":</h5>
      {results && <Products products={results} />}
    </>
  );
}
