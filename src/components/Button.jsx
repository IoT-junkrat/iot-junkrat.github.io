import React from 'react';

const Button = ({ email, subject, body, styles }) => {

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
      Send Email
    </a>
    </button>
  );
};
export default Button;
