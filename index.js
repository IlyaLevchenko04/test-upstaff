const body = document.getElementsByTagName("body");
const productsWrapper = document.querySelector(".products-list-wrapper");
const productsList = document.querySelector(".products-list");
const arr = [
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 5000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 6000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 7000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 8000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 9000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 10000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 11000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 12000,
  },
  {
    url: "https://iso.500px.com/wp-content/uploads/2015/02/craig_cover.jpg",
    price: 13000,
  },
];

const insertDiv = () => {
  const div = document.createElement("div");
  div.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eveniet reiciendis doloribus minima eligendi aliquam. Officia, odit! Eum inventore molestiae facilis rerum voluptatibus provident iusto, corrupti dolore aliquam perspiciatis fugit?";
  div.style.textAlign = "center";
  div.style.padding = "10px";
  div.style.boxShadow = "0px 0px 5px 0px rgba(0, 0, 0, 0.5)";
  div.style.borderRadius = "5px";
  div.style.margin = "10px";
  div.style.backgroundColor = "#ffffff";
  div.style.flexGrow = "2";
  div.className = "products-list-item";
  div.style.display = "flex";
  div.style.alignItems = "center";

  if (window.innerWidth < 780) {
    div.style.width = "calc((100vw - 20px))";
  } else if (window.innerWidth >= 1200) {
    div.style.width = "calc((100vw - 50px)/4)";
  } else if (window.innerWidth >= 780) {
    div.style.width = "calc((100vw - 35px)/2)";
  }

  const { children } = productsList;

  const fourthChild = children[3];
  const parent = fourthChild.parentElement;
  parent.insertBefore(div, fourthChild.nextSibling);
};

const result = arr
  .map(({ url, price }) => {
    if (window.innerWidth >= 1200) {
      return `<li class="products-list-item" style="width: calc((100vw - 65px) / 4); display:flex; flex-direction:column; text-align: center;">
  <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
  <span>${price}</span>
  </li>`;
    }

    if (window.innerWidth >= 780) {
      return `<li class="products-list-item" style="width: calc((100vw - 50px) / 3); display:flex; flex-direction:column; text-align: center;">
  <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
  <span>${price}</span>
  </li>`;
    }

    return `<li class="products-list-item" style="width: calc((100vw - 35px) / 2); display:flex; flex-direction:column; text-align: center;">
    <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
    <span>${price}</span>
    </li>`;
  })
  .join("");

productsList.innerHTML = result;

insertDiv();

window.addEventListener("resize", (e) => {
  productsList.innerHTML = arr
    .map(({ url, price }) => {
      if (window.innerWidth >= 1200) {
        return `<li class="products-list-item" style="width: calc((100vw - 65px) / 4); display:flex; flex-direction:column; text-align: center;">
    <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
    <span>${price}</span>
    </li>`;
      }

      if (window.innerWidth >= 780) {
        return `<li class="products-list-item" style="width: calc((100vw - 50px) / 3); display:flex; flex-direction:column; text-align: center;">
    <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
    <span>${price}</span>
    </li>`;
      }

      return `<li class="products-list-item" style="width: calc((100vw - 35px) / 2); display:flex; flex-direction:column; text-align: center;">
    <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
    <span>${price}</span>
    </li>`;
    })
    .join("");
  insertDiv();
});
