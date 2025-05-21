import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/products";

export default function Product() {
  const { query } = useRouter();
  
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 67,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam consequuntur quis nisi ratione voluptatem repellendus obcaecati minima neque, quos soluta, molestiae eos ea officiis esse dolorum. Tempora, sint placeat.</p>
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  );
}
