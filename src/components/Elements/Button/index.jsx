const Button = (props) => {
  const {
    children,
    className,
    href,
    onClick = () => {},
    type = "button",
  } = props;

  if (href) {
    return (
      <a
        href={href}
        className={`px-4 py-2 font-semibold text-white ${className} rounded hover:bg-blue-800`}>
        {children || "Click me"}
      </a>
    );
  }

  return (
    <button
      className={`px-2 py-1 font-semibold text-white ${className} rounded hover:bg-blue-800 `}
      type={type}
      onClick={() => onClick()}>
      {children || "Click me"}
    </button>
  );
};

export default Button;
