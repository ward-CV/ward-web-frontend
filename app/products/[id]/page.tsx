import Product from "@/app/components/product/product";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = params;

  return <Product />;
};

export default ProductPage;
