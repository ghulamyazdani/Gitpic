 import React from 'react'
 
 export default function Org({organisations}) {
     return (<>
             {organisations?organisations.map((org) => (
              <div className="org" key={org.avatar_url}>
              <img src={org.avatar_url} alt="" />
              <span>{org.login}</span>
              </div>
            )):<p>not part of any org</p>}
            </>
           
     )
 }
 
 
 
 
           