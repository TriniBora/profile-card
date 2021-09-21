import React from 'react';
import Description from './Description';
import SocialMedia from './SocialMedia';

export default function CardBody({ details, quote, quoteAuthor, socialMediaItems }) {
    return (
      <div className="card-body">
        <Description
          details={details}
          quote={quote}
          quoteAuthor={quoteAuthor}
        />
        <SocialMedia socialMediaItems={socialMediaItems} />
      </div>
    );
  }