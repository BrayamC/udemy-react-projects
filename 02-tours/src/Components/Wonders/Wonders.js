import React from 'react';
import Wonder from './Wonder';

const Tours = ({wonders}) => {
  return (
    <section>
        <div className="title">
          <h2>World Wonders</h2>
          <div className="underline" />
        </div>
        <div>
          {wonders.map((wonder, id) => {
            return <Wonder key={id} {...wonder} />
          })}
        </div>
    </section>
  );
};
export default Tours;
