import './style.css';
import products from "../api/products.json";
import { showProductContanier } from '../src/homeProductCard';

// call the function to display all the product as card and input takes array

showProductContanier(products);
