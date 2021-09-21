import React from 'react';
import Avatar from './Avatar';
import UserInfoHeader from './UserInfoHeader';

export default function CardHeader({ fullName, label, avatarUrl }) {
    return (
      <div className="class-header">
        <Avatar avatarUrl={avatarUrl} />
        <UserInfoHeader fullName={fullName} label={label} />
      </div>
    );
  }