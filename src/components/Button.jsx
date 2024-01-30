import React from 'react';

const Button = ({ email, subject, body, styles }) => {


  {/*const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;*/}


  return (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href="&#x6d;&#x61;&#x69;&#x6c;&#x74;&#x6f;&#x3a;%69&#x6e;f&#x6f;&#x40;%73%61%66e%72&#x2e;n%65t%77or%6b" title="i&#x6e;f&#x6f;@&#x73;af&#x65;r&#x2e;ne&#x74;wo&#x72;k">
      Send Email
    </a>
    </button>
  );
};
export default Button;
