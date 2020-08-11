import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './Products.module.css';

const Products = ({ products }) => {
  return (
    <div className={styles.products}>
      <ul className={styles.productListing}>
        {products.map((product) => {
          return (
            <li className={styles.product} key={product.id}>
              <Card className={styles.card}>
                <CardContent>
                  <a href={`#${product.id}`} className={styles.productLink}>
                    <div className={styles.productHeader}>
                      <h4>{product.title}</h4>
                      <span className={styles.productPrice}>
                        {product.price} £
                      </span>
                    </div>

                    <img
                      src={`/products/${product.image_url}`}
                      alt={product.title}
                      className={styles.productImage}
                    />
                  </a>
                </CardContent>
                <CardActions>
                  <Button className={styles.add}>Add to cart</Button>
                </CardActions>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
