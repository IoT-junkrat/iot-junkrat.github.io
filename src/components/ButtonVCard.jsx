import React from 'react';

const ButtonVCard = ({ styles }) => {


  return (
    <buttonvcard type="buttonvcard" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href="https://safer.network/contact.vcf">
      Get Virtual Business Card
    </a>
    </buttonvcard>
  );
};
export default ButtonVCard;
