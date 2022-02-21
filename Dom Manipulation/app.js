const secondLi = document.getElementById("second-li");
const firstLi = document.querySelector("li");
const secondLiQuery = document.querySelector("#second-li");
console.log(firstLi);
console.log(secondLi);
console.log(secondLiQuery);
const listItems = document.querySelectorAll("li");
const listItemsTagName = document.getElementsByTagName("li");
const listItemsByClassName = document.getElementsByClassName("listItem");

console.log(listItems);
console.log(listItemsTagName);
console.log(listItemsByClassName);

//listItemsByClassName.forEach((item) => console.log(item));

Array.prototype.forEach.call(listItemsByClassName, function (item) {
  console.log(item);
  console.log(item.nodeName);
});

//edit style
firstLi.style.background = "blue";
firstLi.style.color = "red";
firstLi.style.transition = `all 1s`;
firstLi.style.transform = `translate3d(-100px,0,0)`;

//edit text

secondLi.textContent = `change text`;
secondLi.setAttribute("class", "big");

secondLi.classList = "blue orange";

secondLi.classList.remove("big");

secondLi.classList.add("big");

//create nodes

const p = document.createElement("p");
const textNode = document.createTextNode("content node");
p.append(textNode);

//document.body.append(p, "teste", "teste 2");

document.body.prepend(p);

//document.body.appendChild(p);

//document.body.appendChild(p);

//acima do primeiro filho
//document.body.insertAdjacentElement("afterbegin", p);

//abaixo do elemento
//document.body.insertAdjacentElement("afterend", p);

//acima do elemento

//document.body.insertAdjacentElement("beforebegin", p);

//abaixo do último filho
//document.body.insertAdjacentElement("beforeend", p);

console.log(document.querySelector("ol").innerHTML);
const items = [];

const fragment = new DocumentFragment();

// new DocumentFragment() or document.createDocumentFragment()
const ol = document.querySelector("ol");
for (let index = 0; index < 3; index++) {
  const li = document.createElement("li");

  li.textContent = index;

  //items.push(li);

  fragment.append(li);
}

//ol.append(...items);
ol.append(fragment);

console.log(window.innerWidth);
console.log(window.innerHeight);

console.log(firstLi.style.fontSize);
console.log(window.getComputedStyle(firstLi).fontSize);

const scrollable = document.getElementById("scrollable");

console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);
console.log(scrollable.scrollTop);

scrollable.addEventListener("scroll", function (event) {
  let isFinnaly = this.scrollHeight - this.scrollTop - this.clientHeight;
  if (isFinnaly === 0) {
    console.log("heree!");
    this.scrollTo({
      top: this.querySelectorAll("p")[2].offsetTop,
      behavior: "smooth",
    });
  }
});
