import React from "react"

const Title = ({ title }) => {
  return (
    <h2
      style={{
        letterSpacing: 1,
        fontSize: "2rem",
        textAlign: "center",
      }}
    >
      {title ? title : `No Title`}
      <hr
        style={{
          width: 100,
          height: 3,
          backgroundColor: "#2caeba",
          border: "none",
          boxShadow: "none",
          margin: "auto",
          marginTop: 10,
        }}
      />
    </h2>
  )
}

export default Title
