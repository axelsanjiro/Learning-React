const Button = (props) => {
  const { children, className , href} = props;

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
      className={`px-4 py-2 font-semibold text-white ${className} rounded hover:bg-blue-800`}
      type="submit">
      {children || "Click me"}
    </button>
  );
};

export default Button;