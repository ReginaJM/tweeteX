import { getPost } from "../services/posts.js";

const initApp = async () => {
  const posts = await getPost();
  const feed = document.querySelector("#postFeed");

  posts.forEach((post) => {
    feed.appendChild(document.createTextNode(`${post.id}, ${post.message}`));
  });

  const test = await getPost("Tweeteuser_965778");
  console.log(test);
};

document.addEventListener("DOMContentLoaded", initApp);
