const getinput = (e) => {
  if (e.key === "Enter") {

    let searchword = document.getElementById("inputq").value;
    console.log(searchword);
    debounce(searchword);
  }
};

let id;
const debounce = async (data) => {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    localStorage.setItem("word", JSON.stringify(data));
    sort();
  }, 500);
};

const getdata = async (url) => {
  try {
    let res = await fetch(url);
    let result = await res.json();
    console.log(result);

    append1(result.results);
    // return result
  } catch (error) {
    console.log(error);
  }
};

const append1 = (data) => {
  document.getElementById("descr").innerHTML = null;
  data.forEach( (el)=> {
    let div = document.createElement("div");
    let image = document.createElement("img");

    image.src = el.urls.small;
    div.append(image);
    document.getElementById("descr").append(div);
  });
};

const mainpara = (word, sort, filt) => {
  let url = `https://api.unsplash.com/search/photos?page=1&query=${word}&per_page=20&order_by=${sort}&orientation=${filt}&client_id=xjuQqDjtXdwJG2gnCgrOhGzR2bxiQX17r0mxiY8kbJ8`;
  getdata(url);
};



function show() {
  localStorage.setItem("word", JSON.stringify(this.id));

  sort();
  // console.log(this.id);
}

function show2() {
  localStorage.setItem("filter", JSON.stringify(this.id));

  sort();
  // console.log(this.id);
}

const sort = () => {
  let word = JSON.parse(localStorage.getItem("word"));
  let filt = JSON.parse(localStorage.getItem("filter")) || "squarish";
  let sort = document.getElementById("sort-select").value;

  mainpara(word, sort, filt);
}


const navbar = () =>{
  return `<div class="firstone">
  <svg width="32" height="32" class="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false">
  <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>            
</div>
<div  class="first">
<i class="fa fa-magnifying-glass"></i>
<input type="text" name="" id="inputq" placeholder="Search free high-resolution photos">

<svg width="32" height="32" class="VdNCI nT46U VETef" viewBox="0 0 32 32" version="1.1" aria-hidden="false"><path d="M6.7 25.3H12V28H6.7C5.2 28 4 26.8 4 25.3V20h2.7v5.3zm0-18.6H12V4H6.7C5.2 4 4 5.2 4 6.7V12h2.7V6.7zM25.3 4H20v2.7h5.3V12H28V6.7C28 5.2 26.8 4 25.3 4zm0 21.3H20V28h5.3c1.5 0 2.7-1.2 2.7-2.7V20h-2.7v5.3zm-4-9.3c0 2.9-2.4 5.3-5.3 5.3s-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3zm-2.6 0c0-1.5-1.2-2.7-2.7-2.7s-2.7 1.2-2.7 2.7 1.2 2.7 2.7 2.7 2.7-1.2 2.7-2.7z"></path></svg>
</div>
<div class="second">
<p>Explore</p>
<p>Advertise</p>
<p>Blog</p>
<p>|</p>
<p>Log in /</p>
<p>Sign up</p>
<p>Submit</p>
<p class="fa fa-bars"></p>
</div>`
}



export { getinput, sort, show, show2 ,navbar};