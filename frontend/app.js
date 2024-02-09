// Fetch Call
const settings = {
  api: {
    port: 3000,
    localhost: "http://192.168.171.72:",
  },
};

const getPost = async (id = "") => {
  const resource = `test/${id}`;
  const endpoint = `${settings.api.localhost}${settings.api.port}/${resource}`;

  try {
    const response = await fetch(endpoint);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
};

// Initialize Front App
const initApp = async () => {
  const posts = await getPost();
  console.log(posts);

  const feed = document.querySelector("#postFeed");

  posts.forEach((post) => {
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    article.appendChild(h2);
    article.appendChild(p);

    h2.innerText = post.id;
    p.innerText = post.message;

    feed.appendChild(article);
  });

  // await addPost({ userSubject: "hej på dig" });
};

document.addEventListener("DOMContentLoaded", initApp);

// Send Form Input
const addPost = async (data) => {
  const resource = "test/saveMessage";
  const endpoint = `${settings.api.localhost}${settings.api.port}/${resource}`;
  const options = {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(endpoint, options);

    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
};

const button = document.querySelector("button");
const form = document.querySelector("form");

const sendMessage = async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);

  await addPost(data);
};

button.addEventListener("click", sendMessage);
