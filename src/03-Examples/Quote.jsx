import { useLayoutEffect, useRef, useState } from "react";

/* eslint-disable react/prop-types */
export const Quote = ({ name, status }) => {

  const paragrahRef = useRef();
  const [paragraphSixe, setParagraphSixe] = useState({width:0, height:0})

  useLayoutEffect(() => {
    const {width, height} = paragrahRef.current.getBoundingClientRect()

    setParagraphSixe({     
      width,
      height
    })
  }, [status]);

  return (
    <div>
      <blockquote className="blockquote text-right" style={{ display: "flex" }}>
        <p ref={paragrahRef} className="mb-1">
          {name}
        </p>
        <footer className="blockquote-footer">{status}</footer>
      </blockquote>

      <code>{JSON.stringify(paragraphSixe)}</code>
    </div>
  );
};
