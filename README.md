 ## Live Demo  https://content-ful-project.netlify.app/

# 🌐 React + Contentful Portfolio Projects

This project is a **React application** that dynamically fetches and displays project data from **Contentful**, a headless CMS.  
Each project appears as a clean, responsive **card** with a title and image.  
When you click on a project image, you’re redirected to the **live deployed version** hosted on Netlify.  

Every time content changes in Contentful, the site is **automatically rebuilt on Netlify** using **webhooks**, keeping your portfolio always up to date.


## 🚀 Features

- 🧩 **Dynamic content fetching** — All project data (title, image, and URL) is fetched directly from Contentful’s API.
- ⚡ **React Hooks** — Built using `useState` and `useEffect` for managing and loading data.
- 🎨 **Modern responsive design** — Styled with CSS for a clean, flexible card layout.
- 🔗 **Live project links** — Clicking on an image opens the deployed project in a new browser tab.
- 🔒 **Secure API keys** — Managed safely through environment variables (`.env`).
- 🔁 **Automatic updates via webhooks** — When you update or add content in Contentful, Netlify rebuilds your site automatically.
- 💾 **Headless CMS integration** — Add or edit content easily without touching the code.

---

## 🛠️ Tech Stack

## Technology | Description 

 **React** | Frontend library for building the UI |
 **Contentful** | Headless CMS for managing project data |
 **CSS** | Custom styling for cards and responsive layout |
 **Netlify** | Hosting platform for automatic deployment and webhooks |
 **.env** | Stores private API keys securely |

