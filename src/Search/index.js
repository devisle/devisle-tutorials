import React, { useState } from "react";
import { Catalog } from "../Markdowns/Catalog";
import { withRouter } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = props => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.Container}>
      <section className={styles.Search}>
        <h2>Clean Code</h2>
        <input
          onChange={e => setSearch(e.target.value)}
          value={search}
          placeholder="Search for a tutorial... "
        />
      </section>
      <section>
        {Catalog &&
          Catalog.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
          ).map(({ title, description, category, fileName }, index) => (
            <div
              key={index}
              className={styles.SearchResult}
              onClick={() => props.history.push(`/tutorial/${fileName}`)}
            >
              <h4>{title}</h4>
              <p>{description}</p>
              <span>{category}</span>
            </div>
          ))}
      </section>
    </div>
  );
};

export default withRouter(Search);
