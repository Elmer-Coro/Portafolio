import React from "react";

export default function Socials() {
  return (
    <div className='flex items-center gap-4'>
      <a href='#'>
        <i
          className='fa-brands fa-linkedin'
          style={{ color: "#1b69ee" }}
        />
      </a>
      <a href='#'>
        <i className='fa-brands fa-github' />
      </a>
      <a href='#'>
        <i
          className='fa-brands fa-instagram'
          style={{ color: "#a94279" }}
        />
      </a>
    </div>
  );
}
