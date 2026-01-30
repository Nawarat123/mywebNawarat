const data = {
  nike: {
    name: "Nike",
    country: "สหรัฐอเมริกา",
    desc: "แบรนด์กีฬาระดับโลก เน้นนวัตกรรม เทคโนโลยี และดีไซน์",
    models: "Air Force 1, Air Jordan, Air Max, Dunk",
    img: "images/nike.jpg"
  },
  adidas: {
    name: "Adidas",
    country: "เยอรมนี",
    desc: "โดดเด่นด้านเทคโนโลยี Boost และดีไซน์สปอร์ต",
    models: "Ultraboost, Superstar, Stan Smith, NMD",
    img: "images/adidas.jpg"
  },
  puma: {
    name: "Puma",
    country: "เยอรมนี",
    desc: "รองเท้ากีฬาและแฟชั่นที่คล่องตัว",
    models: "Suede, RS-X",
    img: "images/puma.jpg"
  },
  nb: {
    name: "New Balance",
    country: "สหรัฐอเมริกา",
    desc: "รองเท้าที่เน้นความสบาย เหมาะกับการใส่ทุกวัน",
    models: "990, 574, 327",
    img: "images/nb.jpg"
  },
  converse: {
    name: "Converse",
    country: "สหรัฐอเมริกา",
    desc: "รองเท้าผ้าใบคลาสสิกระดับตำนาน",
    models: "Chuck Taylor, Chuck 70",
    img: "images/converse.jpg"
  },
  vans: {
    name: "Vans",
    country: "สหรัฐอเมริกา",
    desc: "รองเท้าสเก็ตและสตรีทแฟชั่น",
    models: "Old Skool, Sk8-Hi",
    img: "images/vans.jpg"
  },
  reebok: {
    name: "Reebok",
    country: "สหราชอาณาจักร",
    desc: "คลาสสิก + ฟิตเนส",
    models: "Classic Leather, Club C",
    img: "images/reebok.jpg"
  },
  asics: {
    name: "ASICS",
    country: "ญี่ปุ่น",
    desc: "รองเท้าวิ่งเพื่อสุขภาพ",
    models: "Gel-Kayano, Gel-Nimbus",
    img: "images/asics.jpg"
  },
  skechers: {
    name: "Skechers",
    country: "สหรัฐอเมริกา",
    desc: "นุ่ม เบา ใส่สบาย",
    models: "Go Walk, Arch Fit",
    img: "images/skechers.jpg"
  },
  onrunning: {
    name: "On Running",
    country: "สวิตเซอร์แลนด์",
    desc: "เทคโนโลยี CloudTec",
    models: "Cloud 5, Cloudnova",
    img: "images/onrunning.jpg"
  }
};

// ลำดับแบรนด์
const brandOrder = Object.keys(data);

// อ่าน brand จาก URL
const params = new URLSearchParams(window.location.search);
const currentKey = params.get("brand");
const index = brandOrder.indexOf(currentKey);
const b = data[currentKey];

// หาแบรนด์ก่อนหน้า / ถัดไป
const prevBrand = brandOrder[index - 1];
const nextBrand = brandOrder[index + 1];

if (b) {
  document.getElementById("brandContent").innerHTML = `
    <div class="brand-box" style="
      max-width:800px;
      margin:auto;
      background:#fff;
      padding:30px;
      border-radius:16px;
      box-shadow:0 10px 30px rgba(0,0,0,0.08);
      text-align:center;
      animation: fadeIn 0.6s ease;
    ">
      <img src="${b.img}" alt="${b.name}" style="max-width:240px;margin-bottom:20px;">

      <h2>${b.name}</h2>
      <p style="color:#666;">${b.desc}</p>

      <table class="data-table" style="margin:20px auto;">
        <tr><th width="30%">ประเทศ</th><td>${b.country}</td></tr>
        <tr><th>รุ่นยอดนิยม</th><td>${b.models}</td></tr>
      </table>

      <div style="margin-top:30px; display:flex; justify-content:space-between;">
        ${prevBrand ? `<a class="nav-btn" href="brand-detail.html?brand=${prevBrand}">◀ ก่อนหน้า</a>` : `<span></span>`}
        <a class="nav-btn" href="brands.html">กลับหน้าแบรนด์</a>
        ${nextBrand ? `<a class="nav-btn" href="brand-detail.html?brand=${nextBrand}">ถัดไป ▶</a>` : `<span></span>`}
      </div>
    </div>

    <style>
      .nav-btn {
        padding:10px 20px;
        background:#111;
        color:#fff;
        border-radius:20px;
        text-decoration:none;
        font-size:14px;
        transition: transform 0.2s ease, background 0.2s ease;
      }
      .nav-btn:hover {
        background:#333;
        transform: translateY(-2px);
      }
      @keyframes fadeIn {
        from { opacity:0; transform: translateY(20px); }
        to { opacity:1; transform: translateY(0); }
      }
    </style>
  `;
} else {
  document.getElementById("brandContent").innerHTML =
    "<p style='text-align:center;'>ไม่พบข้อมูลแบรนด์</p>";
}
