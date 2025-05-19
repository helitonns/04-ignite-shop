import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$primary",
  color: "$white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$secondary",
  },
});

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Button>Click Me</Button>
    </>
  );
};
