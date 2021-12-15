import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="created-by">Copyright © All rights reserved.</div>
      <div className="foot">
        <a
          href="https://github.com/ghulamyazdani/Gitpic/blob/master/README.md"
          target="blank"
        >
          <span>About</span>
        </a>
        <a href="https://github.com/ghulamyazdani/Gitpic" target="blank">
          <span>Source</span>
        </a>
        <a
          href="https://github.com/ghulamyazdani/Gitpic/blob/master/LICENSE"
          target="blank"
        >
          <span>Licence</span>
        </a>
      </div>
      <div className="created-by">
        created by{" "}
        <a
          href="https://twitter.com/iamyazreza"
          target="blank"
        >
          <b>@ghulamyazdani</b>
        </a>
      </div>
    </footer>
  );
}
