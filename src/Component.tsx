import React from "react";

interface Props {
  text: string;
}

export function Component(props: Props) {
  return <h1 className="text-5xl text-orange-500">{props.text}</h1>;
}
