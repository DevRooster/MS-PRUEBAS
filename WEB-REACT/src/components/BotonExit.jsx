import React from "react"

const BotonExit = ({ exitNav, url, icon }) => {
  return (
    <div>
      {/* 445 - 500 */}
      <div style={{ paddingTop: "500px"}} >
        <a className="nav-exit" href={url}>
          {icon}{exitNav}
        </a>
      </div>
    </div>
  );
};
export default BotonExit
