import CardProduct from "../components/Fragments/CardTeam";
import Button from "../components/Elements/Button";

// Rendering lists
const teams = [
  {
    id: 1,
    name: "Red Bull Racing 2025",
    image: "/images/2025redbullracingcarright.png",
    description:
      " The Red Bull Racing 2025 is a high-performance Formula 1 car designed for speed and agility on the track.",
    color: "bg-blue-950",
    driver1: "/images/drivers/2025redbullracingmaxver01right.png",
    driver2: "/images/drivers/2026redbullracingisahad01right.png",
    link: "https://www.redbullracing.com/",
  },
  {
    id: 2,
    name: "Ferrari 2025",
    image: "/images/2025ferraricarright.png",
    description:
      " The Ferrari 2025 is a sleek and powerful Formula 1 car that combines cutting-edge technology with Italian craftsmanship.",
    color: "bg-red-800",
    driver1: "/images/drivers/2025ferrarichalec01right.png",
    driver2: "/images/drivers/2025ferrarilewham01right.png",
    link: "https://www.ferrari.com/en-EN/formula1",
  },
  {
    id: 3,
    name: "McLaren 2025",
    image: "/images/2025mclarencarright.png",
    description:
      " The McLaren 2025 is a cutting-edge Formula 1 car that blends advanced aerodynamics with high-performance engineering.",
    color: "bg-amber-700",
    driver1: "/images/drivers/2025mclarenlannor01right.png",
    driver2: "/images/drivers/2025mclarenoscpia01right.png",
    link: "https://www.mclaren.com/racing/",
  },
  {
    id: 4,
    name: "Mercedes 2025",
    image: "/images/2025mercedescarright.png",
    description:
      " The Mercedes 2025 is a state-of-the-art Formula 1 car that showcases the pinnacle of automotive innovation and performance.",
    color: "bg-teal-500",
    driver1: "/images/drivers/2025mercedesgeorus01right.png",
    driver2: "/images/drivers/2025mercedesandant01right.png",
    link: "https://www.mercedesamgf1.com/en/",
  },
  {
    id: 5,
    name: "Williams 2025",
    image: "/images/2025williamscarright.png",
    description:
      " The Williams 2025 is a dynamic Formula 1 car that combines lightweight design with powerful performance for an exhilarating racing experience.",
    color: "bg-blue-700",
    driver1: "/images/drivers/2025williamsalealb01right.png",
    driver2: "/images/drivers/2025williamscarsai01right.png",
    link: "https://www.williamsf1.com/",
  },
  {
    id: 6,
    name: "Aston Martin 2025",
    image: "/images/2025astonmartincarright.png",
    description:
      " The Aston Martin 2025 is a luxurious and high-performance Formula 1 car that embodies elegance and speed on the racetrack.",
    color: "bg-emerald-600",
    driver1: "/images/drivers/2025astonmartinferalo01right.png",
    driver2: "/images/drivers/2025astonmartinlanstr01right.png",
    link: "https://www.astonmartinf1.com/",
  },
  {
    id: 7,
    name: "Alpine 2025",
    image: "/images/2025alpinecarright.png",
    description:
      " The Alpine 2025 is a sleek and agile Formula 1 car that combines French engineering excellence with cutting-edge technology.",
    color: "bg-pink-500",
    driver1: "/images/drivers/2025alpinepiegas01right.png",
    driver2: "/images/drivers/2025alpinefracol01right.png",
    link: "https://www.alpinef1.com/",
  },
  {
    id: 8,
    name: "Racing Bulls 2025",
    image: "/images/2025racingbullscarright.png",
    description:
      " The Racing Bulls 2025 is a high-performance Formula 1 car that delivers exceptional speed and precision on the track.",
    color: "bg-sky-700",
    link: "https://www.visacashapprb.com/int-en",
  },
  {
    id: 9,
    name: "Haas 2025",
    image: "/images/2025haascarright.png",
    description:
      " The Haas 2025 is a modern Formula 1 car that combines innovative design with reliable performance.",
    color: "bg-zinc-700",
    driver1: "/images/drivers/2025haasestoco01right.png",
    driver2: "/images/drivers/2025haasolibea01right.png",
    link: "https://www.haasf1team.com/",
  },
  {
    id: 10,
    name: "Audi 2026",
    image: "/images/2026audicarright.png",
    description:
      " The Audi 2026 is a revolutionary Formula 1 car that integrates advanced technology with superior engineering for unmatched performance.",
    color: "bg-orange-700",
    link: "https://www.audi.com/en/sport/motorsport/formula-1/",
  },
];

const email = localStorage.getItem("email");

const TeamsPage = () => {
  // Event handler for logout
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <>
      <div
        className="flex justify-end text-white h-18 text-xl font-bold px-4 items-center gap-4"
        style={{
          background: "linear-gradient(to right, #15151d 100%, #15151d 0%)",
        }}>
        {email}
        <Button
          className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-md"
          onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div
        className="flex justify-center gap-8 flex-wrap"
        style={{
          background: "linear-gradient(to right, #15151d 0%, #15151d 100%)",
        }}>
        <h1 className="w-full text-left mb-4 text-4xl px-4 pl-16">
          <span className="text-3xl font-bold text-white">F1 Team 2026</span>
        </h1>

        {teams.map((team) => (
          <CardProduct key={team.id} bgColor={team.color}>
            <CardProduct.Header image={team.image} />
            <CardProduct.Body title={team.name}>
              {team.description}
            </CardProduct.Body>
            <CardProduct.Footer
              driver1={team.driver1}
              driver2={team.driver2}
              link={team.link}
            />
          </CardProduct>
        ))}
      </div>
    </>
  );
};

export default TeamsPage;
