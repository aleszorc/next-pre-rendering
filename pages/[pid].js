import fs from 'fs/promises';
import path from 'path';

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  return (
    <Framgment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Framgment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export default ProductDetailPage;
