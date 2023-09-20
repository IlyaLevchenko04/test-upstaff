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

const useBreakpoints = () => {
  const isDesktop = window.innerWidth >= 1200;
  const isTablet = window.innerWidth >= 780;

  return {
    isDesktop,
    isTablet,
  };
};

const useCustomWidth = ({ px, elementsAmount = 0 }) => {
  return `calc((100vw - ${px})${elementsAmount ? `/${elementsAmount}` : ""})`;
};

const insertDiv = () => {
  const { isDesktop, isTablet } = useBreakpoints();
  const div = document.createElement("div");
  const width = isDesktop
    ? useCustomWidth({ px: "50px", elementsAmount: 4 })
    : isTablet
    ? useCustomWidth({ px: "35px", elementsAmount: 2 })
    : useCustomWidth({ px: "20px" });

  const styles = {
    width,
    textAlign: "center",
    padding: "10px",
    boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
    margin: "10px",
    backgroundColor: "#fff",
    flexGrow: "2",
    display: "flex",
    alignItems: "center",
  };
  div.textContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis eveniet reiciendis doloribus minima eligendi aliquam. Officia, odit! Eum inventore molestiae facilis rerum voluptatibus provident iusto, corrupti dolore aliquam perspiciatis fugit?";
  Object.assign(div.style, styles);
  div.classList.add("products-list-item");

  const { children } = productsList;

  const fourthChild = children[3];
  const parent = fourthChild.parentElement;
  parent.insertBefore(div, fourthChild.nextSibling);
};

const generateBlocks = () => {
  const { isDesktop, isTablet } = useBreakpoints();
  const width = isDesktop
    ? useCustomWidth({ px: "65px", elementsAmount: 4 })
    : isTablet
    ? useCustomWidth({ px: "50px", elementsAmount: 3 })
    : useCustomWidth({
        px: "35px",
        elementsAmount: 2,
      });

  productsList.innerHTML = arr
    .map(
      ({
        url,
        price,
      }) => `<li class="products-list-item" style="width: ${width}; display:flex; flex-direction:column; text-align: center;">
      <img src=${url} alt="product" class="products-item-photo" style="width: 100%;"/>
      <span>${price}</span>
      </li>`
    )
    .join("");

  insertDiv();
};

generateBlocks();

window.addEventListener("resize", () => generateBlocks());
