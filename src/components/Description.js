import React from 'react';

export default function Description({ details, quote, quoteAuthor }) {
    return (
      <>
        <p className="card-text">{details}</p>
        <small>
          {quote}
          <br />
          {quoteAuthor}
        </small>
      </>
    );
  }