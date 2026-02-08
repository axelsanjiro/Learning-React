const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-700 font-medium mb-1">
      {children}
    </label>
  );
};

export default Label;
