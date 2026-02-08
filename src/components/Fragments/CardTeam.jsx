import Button from "../Elements/Button";

// Nested component structure for CardTeam
const CardTeam = (props) => {
  const { children, bgColor = "bg-blue-950" } = props;
  return (
    <div
      className={`w-full max-w-sm ${bgColor} rounded-lg shadow-xl hover:scale-95 duration-500 p-4`}>
      {children}
    </div>
  );
};

const Header = (props) => {
  const { image } = props;
  return (
    <a href="">
      <img src={image} alt="product" className="p-4 rounded-t-lg" />
    </a>
  );
};

const Body = (props) => {
  const { title, children } = props;
  return (
    <div className="px-4 pb-5 pt-2">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-gray-300 pt-2">{children}</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { driver1, driver2, link } = props;
  return (
    <div className="flex items-center justify-between px-4 pb-5">
      <div className="flex space-x-5">
        <img src={driver1} alt="Driver 1" className="w-6" />
        <img src={driver2} alt="Driver 2" className="w-6" />
      </div>
      <Button href={link} className="bg-blue-600">
        Discover
      </Button>
    </div>
  );
};

CardTeam.Header = Header;
CardTeam.Body = Body;
CardTeam.Footer = Footer;

export default CardTeam;
