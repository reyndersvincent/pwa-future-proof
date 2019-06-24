import React, { Fragment, useEffect, useState } from 'react';
import PokeService from '../../services/pokeservice';
import Loader from '../../components/loader';
import Pokemon from '../../components/pokemon';
import { orderBy } from 'lodash';

import './pokemon-container.css';
import Pagination from '../../components/pagination';

const loadPokemons = (setLoading, setData, setPage, page = 0) => {
  setLoading(true);
  setPage(page);
  PokeService.getPokemons(page)
    .then(response => {
      setLoading(false);
      setData(orderBy(response, ['id'], ['asc']));
    })
    .catch(() => setLoading(false));
}

const PokemonContainer = () => {
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadPokemons(setLoading, setData, setPage, page);
  }, []);

  return (
    <div className="pokemon-container">
      { loading ? <Loader /> : (
        <Fragment>
          <div className="pokemons">
            {data.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
          </div>
          <Pagination
            previousPage={p => loadPokemons(setLoading, setData, setPage, p)}
            nextPage={p => loadPokemons(setLoading, setData, setPage, p)}
            page={page}
          />
        </Fragment>
      ) }
    </div>
  )
};

export default PokemonContainer;