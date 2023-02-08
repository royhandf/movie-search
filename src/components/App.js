import React from "react"
import SearchMovie from "./SearchMovie"
import Headers from "./Header"

const App = () => {
  return (
    <div className="relative width-full">
      <div className="mx-auto overflow-hidden">
        <Headers />
        <SearchMovie />
      </div>
    </div>
  )
}

export default App
