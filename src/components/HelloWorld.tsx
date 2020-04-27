import React, { useState } from 'react';
// import * as Bonjour from './Bonjour.html';
// const html_import = require('./Bonjour.html');
// import html from '../public/Bonjour.html';
const html = require('./Bonjour.html');

const HelloWorld: React.FC = () => {
  return (
    <>
        {console.log(html)}

      <div>Halo dunia</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div>Guten Morgen</div>`
        }}></div>
      <div
        dangerouslySetInnerHTML={{
          __html: html
        }}
      >

      </div>
    </>
  )
}

export default HelloWorld;