import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImPrinter,
  ImYoutube,
  ImInstagram
} from 'react-icons/im'
const Socials = () => {
  return <div className=' hidden xl:flex ml-12'>
   <ul className=' flex gap-x-4 text-gray-900'>
    <li>
      <a href='/' target='-blank'><ImFacebook /></a>
    </li>

    <li>
      <a href='/' target='-blank'><ImTwitter /></a>
    </li>

    <li>
      <a href='/' target='-blank'><ImPrinter /></a>
    </li>

    <li>
      <a href='/' target='-blank'><ImInstagram /></a>
    </li>

    <li>
      <a href='/' target='-blank'><ImYoutube /></a>
    </li>
   </ul>
  </div>;
};

export default Socials;
