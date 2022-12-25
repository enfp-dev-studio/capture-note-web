import React from "react"

type Props = {
  imageSrc: string
}

const IconButton = (props: Props) => {
  return (
    <div>
      <img className="object-fit bg-white rounded" src={props.imageSrc}></img>
    </div>
  )
}

export default IconButton
