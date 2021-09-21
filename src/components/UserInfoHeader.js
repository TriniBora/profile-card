import React from 'react';

export default function UserInfoHeader({ fullName, label }) {
    return (
      <>
        <h4 className="subtitle">{label}</h4>
        <h2 className="title">{fullName}</h2>
      </>
    );
  }