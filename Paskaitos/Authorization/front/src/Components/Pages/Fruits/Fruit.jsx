import React from "react"
import Gate from "../Authorization/Gate"

function Fruit({ fruit }) {
  return (
    <div
      style={{ backgroundColor: fruit?.temp ? `#777777` : fruit.color }}
      className={`fruit ${fruit.shape}`}
    >
      <div className="name">{fruit.name}</div>
      <div className="buttons">
        {!fruit.temp && (
          <>
            <span>
             <Gate roles="admin|user"><a href={`#fruits/edit/${fruit.id}`}>Edit</a></Gate>
            </span>
            <span>
              <Gate roles="admin"><a href={`#fruits/delete/${fruit.id}`}>Delete</a></Gate>

            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Fruit
