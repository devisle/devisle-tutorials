import React, { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "markdown-to-jsx";
import { Icon } from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";
import styles from "./Editor.module.scss";

const Editor = () => {
  const [editor, setEditor] = useState("");
  const [preview, setPreview] = useState("");

  return (
    <div className={styles.Page}>
      <div className={styles.Menu}>
        <Link to="/">
          <Icon size={18} icon={arrowLeft} />
          <span>Go Back</span>
        </Link>
      </div>
      <div className={styles.Container}>
        <div className={styles.Editor}>
          <textarea
            placeholder="Write your markdown here..."
            value={editor}
            onChange={(e) => {
              setEditor(e.target.value);
              setPreview(e.target.value);
            }}
          />
        </div>
        <div className={styles.Preview}>
          <Markdown>{preview}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Editor;
