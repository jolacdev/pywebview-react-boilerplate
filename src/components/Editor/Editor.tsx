import { useState } from "react";
import { usePythonApi } from "../../hooks/pythonBridge";

import styles from "./Editor.module.css";

const INITIAL_CONTENT =
  "Using Python as backend, you can perform operations that are not allowed in Javascript, for example disk access. Click button below to save this content to hard drive.";

export default function Header() {
  const [content, saveContent] = useState(INITIAL_CONTENT);

  return (
    <div className={styles.editorContainer}>
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => {
          saveContent(e.target.value);
        }}
      />
      <br />

      <button
        className={styles.button}
        onClick={() => usePythonApi("save_content", content)}
      >
        Save
      </button>
    </div>
  );
}
