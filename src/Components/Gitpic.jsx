import React, { useState, useEffect } from "react";
import domtoimage from "dom-to-image";
import "./Gitpic.scss";
import Org from "./Org";
export default function Gitpic() {
  const APIURL = "https://api.github.com/users/";
  const [username, setUsername] = useState("ghulamyazdani");
  const [data, setData] = useState([]);
  const [org, setOrg] = useState([]);

  useEffect(() => {
    getUserData();
    getOrg();
  }, []); //eslint-disable-line

  function shot() {
    document.querySelector(".Get-yours").classList.toggle("hide");
    domtoimage
      .toJpeg(document.getElementById("capture"), { quality: 1 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = `Gitpic(${name}).Jpeg`;
        link.href = dataUrl;
        link.click();
      });

    setTimeout(function () {
      document.querySelector(".Get-yours").classList.toggle("hide");
    }, 2000);
  }

  // fetching from api
  async function getUserData() {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    setData(respData ? respData : []);
  }
  async function getOrg() {
    const resp = await fetch(APIURL + username + "/orgs");
    const respData = await resp.json();
    setOrg(Array.isArray(respData) ? respData : []);
  }
  const {
    name,
    avatar_url,
    bio,
    followers,
    following,
    company,
    html_url,
    public_repos,
  } = data;

  return (
    <div className="responsive">
      <h1>
        <i className="fab fa-git"></i>
        <i className="fas fa-images"></i>{" "}
      </h1>
      <form
        id="form"
        onSubmit={(e) => {
          e.preventDefault();
          getUserData();
          getOrg();
        }}
      >
        <input
          type="text"
          placeholder="Enter github username"
          id="search"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button className="button">Generate</button>
      </form>
      <div id="capture">
        <main id="main">
          <div className="card">
            <div className="align">
              <a href={html_url}>
                <img src={avatar_url} alt="" />
              </a>
              <span className="company">{company}</span>
              <div className="follow-stats">
                <span>
                  {followers}
                  <b>Followers</b>
                </span>
                <span>
                  {following}
                  <b>Following</b>
                </span>
                <span>
                  {public_repos}
                  <b>Repos</b>
                </span>
              </div>
            </div>
            <div className="info-container">
              <div className="account-name">
              <h3>{name}</h3>
             </div>
              <p>{bio}</p>
              <h5>Part of:</h5>
              <div id="orgs" className="orgs">
                {org.length > 0 ? (
                  <Org organisations={org} />
                ) : (
                  <p>not part of any organisation</p>
                )}
              </div>
            </div>
          </div>
        </main>
        <p className="hide Get-yours">Get yours Gitpic at gitpic.vercel.app</p>
      </div>
      <button
        onClick={() => {
          shot();
        }}
        id="download-page-as-image"
      >
        Download Your Gitpic
      </button>
    </div>
  );
}
