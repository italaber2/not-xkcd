import { HeaderContent } from "../components/header/headerElement";

export const getHeaderDataById = (id: number) => {
  const jsonData: HeaderContent[] = [
    {
      id: 1,
      title: "A Very Clever Page Title Taco Tuesday",
      content:
        "All of a sudden go crazy cat snacks chase imaginary bugs chase mice chew foot claw drapes destroy couch find something else more interesting.",
    },
    {
      id: 2,
      title: "Projects",
      content:
        "All of a sudden go crazy cat snacks chase imaginary bugs chase mice chew foot claw drapes destroy couch find something else more interesting.",
    },
    {
      id: 3,
      title: "Skills",
      content:
        "All of a sudden go crazy cat snacks chase imaginary bugs chase mice chew foot claw drapes destroy couch find something else more interesting.",
    },
  ];

  const foundItem = jsonData.find((item) => item.id === id);

  return foundItem || null;
};
