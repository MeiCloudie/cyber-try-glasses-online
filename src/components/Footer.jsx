// import React from "react"

const Footer = () => {
  return (
    <div className="bg-pink-700 text-white font-bold text-center p-4">
      <p>
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://startbootstrap.com/previews/heroic-features"
          target="_blank"
          className="hover:text-purple-400"
        >
          Start BootStrap
        </a>{" "}
        - Truong Thuc Van (
        <a
          href="https://github.com/MeiCloudie"
          target="_blank"
          className="hover:text-purple-400"
        >
          MeiCloudie
        </a>
        )
      </p>
    </div>
  )
}

export default Footer
