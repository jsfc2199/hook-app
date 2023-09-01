/* eslint-disable react/prop-types */
export const Quote = ({name,status}) => {
  return (
    <div>
      <blockquote className="blockquote text-right">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{status}</footer>
        </blockquote>
    </div>
  )
}