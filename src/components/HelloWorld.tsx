import React, { useState } from 'react';

const HelloWorld: React.FC = () => {
  return (
    <>
      <div>Halo dunia</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `<div>Guten Morgen</div>`
        }}></div>
    </>
  )
}

export default HelloWorld;