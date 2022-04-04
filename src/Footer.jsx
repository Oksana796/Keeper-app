import React from "react";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright ©{currentYear}</p>
      </footer>
    </div>
  );
}
