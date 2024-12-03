interface ProductPageProps {
  params: { id: string };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { id } = params;

  return (
    <div>
      <h1>Информация о продукте {id}</h1>
    </div>
  );
};

export default ProductPage;
