import * as React from "react"

export interface IImageDescrptionContainerProps {
  imagePosition: "left" | "right"
  content: React.ReactNode
  imageSrc: string
}

export default function ImageDescrptionContainer(props: IImageDescrptionContainerProps) {
  return (
    <>
      {props.imagePosition === "left" ? (
        <div className="flex flex-col w-full md:flex-row gap-12 mx-auto">
          <div className="my-auto w-11/12 self-center mt-16">
            <img decoding="async" loading="lazy" src={props.imageSrc} alt="" title="App-Blocker" />
          </div>
          <div className="my-auto px-6  mt-16">{props.content}</div>
        </div>
      ) : (
        <div className="flex flex-col-reverse w-full md:flex-row gap-12 mx-auto">
          <div className="my-auto px-6  mt-16">{props.content}</div>
          <div className="my-auto w-11/12 self-center mt-16">
            <img decoding="async" loading="lazy" src={props.imageSrc} alt="" title="App-Blocker" />
          </div>
        </div>
      )}
    </>
  )
}
