import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'YSNJEQILKB',
  'ef768a413dab8f5b46866d6414c6554e'
);

// console.log(props.hit.action);

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">naas-search-demo-app</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/srini047/naas-algolia-search">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch
          searchClient={searchClient}
          indexName="naas-templates-index"
        >
          <Configure hitsPerPage={5} />
          <div className="search-panel">
            <div className="search-panel__filters"></div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: 'Search from the templates factory...',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  // const link = props.hit.action;
  // const regex = /href="(https?:\/\/(?:www\.)?.+?\.ipynb)"/;
  // const url = link.match(regex)[1];
  // console.log(url);

  return (
    <div>
      {/* <a href={props.hit.action}> */}
        <article>
          <h1>
            <Highlight attribute="notebook" hit={props.hit} />
          </h1>
          <h4>
            Tool: <Highlight attribute="tool" hit={props.hit} />
          </h4>
          <p>Tags: {props.hit.tags}</p>
          <p>
            <Highlight attribute="description" hit={props.hit} />
          </p>
        </article>
      {/* </a> */}
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
