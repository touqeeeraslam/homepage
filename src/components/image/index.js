/// global image component to be reused.

const Image = (props) =>{
	const {className , src , alt } = props
	return (
    <img
      className={className}
      src={src}
      alt={alt}
    />
  );
}

export default Image;