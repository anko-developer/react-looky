import React from "react";

export default function SocialButton({ social }) {
  return (
    <button>
      <img src={`/assets/images/social-${social}.svg`} alt={social} />
    </button>
  );
}
