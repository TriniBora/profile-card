import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const user = {
    fullName: "Trinidad Boragini",
    label: "Full Stack Web Developer",
    details:
      "Maths Teacher & Software Engineer Intern at BTS. Passionate by learning.",
    quote: "True perfection has to be imperfect.",
    quoteAuthor: "- Little by little - Oasis -",
    avatarUrl: "trinidadb.png",
  };

  const socialMediaItems = [
    {
      id: 1,
      url: "https://instagram.com/trinibora",
      icon: "fab fa-instagram-square",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/trinidad-boragini-55b6351b1/",
      icon: "fab fa-linkedin",
    },
    {
      id: 3,
      url: "https://github.com/TriniBora",
      icon: "fab fa-github-square"
    },
  ];

export default function Card() {
    return (
      <div className="card">
        <CardHeader
          fullName={user.fullName}
          label={user.label}
          avatarUrl={user.avatarUrl}
        />
        <CardBody
          details={user.details}
          quote={user.quote}
          quoteAuthor={user.quoteAuthor}
          socialMediaItems={socialMediaItems}
        />
      </div>
    );
  }