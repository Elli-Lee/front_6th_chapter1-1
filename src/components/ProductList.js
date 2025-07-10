import { ProductItem } from "./ProductItem.js";

export const ProductList = ({ products }) => {
  // console.log("products in ProductList", products);
  /*
  {
    "title": "PVC 투명 젤리 쇼핑백 1호 와인 답례품 구디백 비닐 손잡이 미니 간식 선물포Ò장",
    "link": "https://smartstore.naver.com/main/products/7522712674",
    "image": "https://shopping-phinf.pstatic.net/main_8506721/85067212996.1.jpg",
    "lprice": "220",
    "hprice": "",
    "mallName": "기브N기브",
    "productId": "85067212996",
    "productType": "2",
    "brand": "",
    "maker": "",
    "category1": "생활/건강",
    "category2": "생활용품",
    "category3": "생활잡화",
    "category4": "쇼핑백"
}
  */
  return products.map((item) => ProductItem({ item })).join("");
};
