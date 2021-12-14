import React, { useState, useEffect } from "react";
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
  async function getUserData() {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();
    setData(respData?respData:[]);
  }
  async function getOrg() {
    const resp = await fetch(APIURL + username + "/orgs");
    const respData = await resp.json();
    setOrg(respData?respData:[]);
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
    <div>
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
          placeholder="Enter username"
          id="search"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </form>
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
          <div>
            <h3>{name}</h3>
            <p>{bio}</p>
            <h5>Part of:</h5>
            <div id="orgs" className="orgs">
              <Org organisations={org} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
