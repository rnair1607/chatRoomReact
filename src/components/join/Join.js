import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join a chat room</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
          <Link
            onClick={(e) => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className="button mt-20" type="submit">
              <svg
                width="150"
                height="100"
                viewBox="0 0 880 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Triangles" clipPath="url(#clip0)">
                  <g id="lightGroup">
                    <path
                      id="light1"
                      opacity="0.7"
                      d="M262.799 281.28C271.212 285.831 271.181 297.914 262.744 302.42L38.7662 422.063C30.7606 426.339 21.0888 420.523 21.1123 411.447L21.7353 171.003C21.7588 161.927 31.4607 156.161 39.444 160.479L262.799 281.28Z"
                    />
                  </g>
                  <g id="darkGroup">
                    <path
                      id="dark1"
                      opacity="0.7"
                      d="M400.799 282.28C409.212 286.831 409.18 298.914 400.744 303.42L176.766 423.063C168.76 427.339 159.089 421.523 159.112 412.447L159.735 172.003C159.759 162.927 169.461 157.161 177.444 161.479L400.799 282.28Z"
                    />
                    <path
                      id="dark2"
                      opacity="0.7"
                      d="M263.799 283.28C272.212 287.831 272.18 299.914 263.744 304.42L39.7661 424.063C31.7605 428.339 22.0887 422.523 22.1122 413.447L22.7353 173.003C22.7588 163.927 32.4606 158.161 40.444 162.479L263.799 283.28Z"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="880" height="678" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
