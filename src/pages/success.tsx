import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Product() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>
      <ImageContainer></ImageContainer>

      <p>
        Uhul! <strong>Heliton</strong>, sua <strong>Camiseta Beyond</strong> já
        está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálago
      </Link>
    </SuccessContainer>
  );
}
