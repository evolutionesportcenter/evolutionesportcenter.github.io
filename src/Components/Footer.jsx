import React from 'react';
import SocialMedia from './SocialMedias';

export default function Footer({ urlInstagran }) {

  function year() {
    const year = new Date().getFullYear();
    return year
  }

  return(
    <footer>
    <SocialMedia
    urlInstagran={ urlInstagran }
    />
      <p>Copyright&copy; { year() } - Igson Félix | Bárbara Badu</p>
    </footer>
  );
}