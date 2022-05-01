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


export { getinput, sort, show, show2 };