datas = [
  {
    title: "CÀ PHÊ",
    img: "../../asscet/images/product/cafe.jpg",

    data: [
      { name: "Cà Phê Sữa", price: 29000 },
      { name: "Cà Phê Đen", price: 29000 },
      { name: "Cà Phê Hạnh Nhân", price: 39000 },
      { name: "Espresso / Americano", price: 39000 },
      { name: "Latte/ Cappuccino", price: 49000 },
      { name: "Caramel Machiato", price: 59000 },
    ],
  },
  {
    title: "TRÀ",
    img: "../../asscet/images/product/trasua.jpg",
    data: [
      { name: "Trà Gừng Cam Quế", price: 49000 },
      { name: "Trà Sữa Oolong Rang", price: 49000 },
      { name: "Trà Long Nhãn Hạt Sen Kem Phô Mai", price: 49000 },
      { name: "Trà Long Nhãn Hạt Sen", price: 49000 },
      { name: "Trà Cascara Yuzu", price: 49000 },
      { name: "Trà Xoài Kem Phô Mai", price: 49000 },
      { name: "Trà Xanh Gạo Lức Kem Phô Mai", price: 49000 },
      { name: "Trà Vải Thiều", price: 49000 },
      { name: "Trà Đào Cam Sả", price: 49000 },
    ],
  },
  {
    title: "ĐÁ XAY / SINH TỐ",
    img: "../../asscet/images/product/tratraicay.jpg",
    data: [
      { name: "Sữa Chua Nha Đam Sả", price: 49000 },
      { name: "Tắc Đào", price: 49000 },
      { name: "Sinh Tố Việt Quất", price: 49000 },
      { name: "Chocolate Hạnh Nhân", price: 55000 },
      { name: "Trà Xanh Gạo Lức Đá Xay", price: 59000 },
      { name: "Mè Đen Đá Xay", price: 55000 },
    ],
  },
  {
    title: "TRÁI CÂY/ HOME MADE/ KOMBUCHA",
    img: "../../asscet/images/product/tratraicay.jpg",
    data: [
      { name: "Yogurt Nha Đam Ngũ Cốc", price: 55000 },
      { name: "Yellow Summer", price: 55000 },
      { name: "Yogurt Xoài Ngũ Cốc", price: 55000 },
      { name: "Autumn Collection", price: 55000 },
      { name: "Red Sunset", price: 55000 },
      { name: "Trà Vải Hoa Hồng Lên Men", price: 55000 },
      { name: "Trà Nguyên Vị Lên Men", price: 55000 },
      { name: "Trà Hoa Hibiscus Lên Men", price: 55000 },
    ],
  },
  {
    title: "THỨC ĂN/ CƠM NIÊU",
    img: "../../asscet/images/product/com.jpg",
    data: [
      { name: "Hủ Tiếu Nam Vang", price: 65000 },
      { name: "Mì Ý Bò Bằm", price: 59000 },
      { name: "Cà Ri Gà Bánh Mì", price: 59000 },
      { name: "Hủ Tiếu Xào Tôm", price: 65000 },
      { name: "Cơm Tấm Sườn Chả Trứng", price: 55000 },
    ],
  },
  {
    title: "Cơm Niêu",
    img: "../../asscet/images/product/com.jpg",
    data: [
      {
        name: "Cơm niêu, món mặn, món xào, canh, salad tự chọn (thực đơn thay đổi theo ngày)",
        price: 55000,
      },
      { name: "Cơm Đùi Gà Sốt Mắm Tỏi", price: 55000 },
      { name: "Phở Bò", price: 59000 },
      { name: "Cơm Đùi Gà Nướng Mật Ong", price: 55000 },
      { name: "Cơm Chiên Bò Lúc Lắc", price: 65000 },
    ],
  },
  {
    title: "VẬT PHẨM",
    img: "../../asscet/images/product/sanpham.jpg",
    data: [
      { name: "Phin Nhôm", price: 89000 },
      { name: "Bình Giữ Nhiệt", price: 219000 },
      { name: "Ca Men", price: 89000 },
    ],
  },
];

renderMenu();
reverseMenu();

function renderMenu() {
  const element = document.querySelector(".menu-wrapper");
  const html = [];
  datas.map((data) => {
    html.push(
      `<div class="menu-item" id="${removePunctuation(data.title)}">
        <img class="menu-img" src="${data.img}" alt="">
        <div class="menu-list">
          <h3 class="menu-list-header">${data.title}</h3>
          ${data.data.map(
            (item) =>
              `
                <div class="menu-list-item">
                <p>${item.name}</p>
                <p class="price">${item.price / 1000}.000<span> Đ</span></p>
                </div>
                `
          )}
        </div> 
      </div>`
    );
    element.innerHTML = html.join(" ").replaceAll(",", "");
  });
}

function reverseMenu() {
  const items = document.querySelectorAll(".menu-item");
  items.forEach((item, index) => {
    if (index % 2 !== 0) {
      item.classList.add("rev");
    }
  });
}

function removePunctuation(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "-")
    .replaceAll("đ", "d")
    .replaceAll("/", "")
    .toLowerCase();
}
