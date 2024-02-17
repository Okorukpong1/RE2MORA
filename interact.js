"use strict";

const headerBodyCon = document.querySelector(".header-body-con");
const nav = document.querySelector(".nav");
const header = document.querySelector("header");
const headerHeight = header.getBoundingClientRect().height;

const obsOption = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
};

const obsCallback = (entries) => {
  const entry = entries[0];
  console.log(entry);

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(headerBodyCon);

const allSection = document.querySelectorAll('.section')



const sectionOption = {
  root: null,
  threshold: 0.2,
}

const sectionCallback = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section-hidden');

  observer.unobserve(entry.target); 

}

const sectionObserver = new IntersectionObserver(sectionCallback, sectionOption)
allSection.forEach((sec) => {
  sectionObserver.observe(sec);
  sec.classList.add('section-hidden');
}) 