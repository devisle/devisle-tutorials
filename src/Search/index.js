import React, { useState } from "react";
import { Catalog } from "../Markdowns/Catalog";
import { withRouter, Link } from "react-router-dom";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className={styles.Container}>
      <section className={styles.Search}>
        <h2>Dev Isle Coding Tutorials</h2>
        <h3>Simple, quick and honest guides.</h3>
        <Link to="/new">
          <span>How to submit a new tutorial!</span>
        </Link>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search for a guide... "
        />
      </section>
      <section className={styles.SearchList}>
        {Catalog &&
          Catalog.filter((item) =>
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
