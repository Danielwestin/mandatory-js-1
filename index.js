/*
1 .The previous developer thought the company is named Fruits & Bananas Corp,
but it's actually called Fruits & Vegetables Corp
Text content in header h1 is wrong, should be Fruits & Vegetables Corp (see first issue)
*/
let pageTitle = document.querySelector("h1");
pageTitle.textContent = "Fruits & Vegetables Corp";

/*
2. The last a tag in header ul has wrong text content and href attribute
(should be Vegetables and not Bananas)
*/
let aTag = document.querySelector("header ul li:last-Child a");
aTag.textContent = "Vegetabels";
aTag.setAttribute("href", "#vegetables");

/*
3. The section #contact and #about are in the wrong order. Swap them
*/

let about = document.querySelector("#about");
let contact = document.querySelector("#contact");

main.insertBefore(about, contact);

/*
5 .The text "We're the best in fruits & vegetables" under #about
should be wrapped in a p tag
*/

let aboutText = document.querySelector("#about").textContent;
document.querySelector("#about").innerHTML = "<p>" + aboutText + "</p>";

/*
4 .Each section should have a h2 tag at the top with corresponding
text according to its id
*/

let h2TagAbout = document.createElement("h2");
h2TagAbout.textContent = "About"
about.appendChild(h2TagAbout);
about.insertBefore(h2TagAbout, about.firstChild);


let h2TagContact = document.createElement("h2");
h2TagContact.textContent = "Contact"
contact.appendChild(h2TagContact);
contact.insertBefore(h2TagContact, contact.firstChild);


/*
The developer used td elements in thead instead of th . Fix it.
*/

let tdTag = document.querySelectorAll("thead tr td");

/*for (let each of tdTag) {
  let thText = document.createElement("th");
  thText.textContent = each.textContent;
  each.replaceWith(thText);
}*/

for (let i = 0; i < tdTag.length; i++){
  let thTag = document.createElement("th");
  tdTag[i].replaceWith(thTag);
}

document.querySelector("thead tr th:first-child").textContent = "Name";
document.querySelector("thead tr th:last-child").textContent = "Email";

/*
The developer forgot to include the main.css file. Add it to head
*/

let head = document.querySelector("head");
let link = document.createElement("link");
link.setAttribute("rel", "stylesheet");
link.setAttribute("href", "main.css");
head.appendChild(link);

/*
Head title is wrong MDN info. Should be "Fruits & Vegetables Corp"
*/

let title = document.querySelector("title");
title.textContent = "Fruits & Vegetables Corp";
