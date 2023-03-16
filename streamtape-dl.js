/*!
 * Streamtape-dl
 * Copyright(c) 2023 Zubin
 */

// Add env vars as a preliminary

require("dotenv").config();
const st = require("streamtape");
const input = require("input");

async function getLink() {
  let url;
  do {
    url = await input.text("Enter Streamtape link:", { default: null });
    if (url == null) {
      console.log("Enter a valid Streamtape link.");
    } else if (!url.match(/^https:\/\/streamtape\.com\/v\/[a-zA-Z0-9]+$/)) {
      console.log("Enter a valid Streamtape link.");
      url = null;
    }
  } while (url == null);
  return url;
}

async function getDownload() {
  const url = await getLink();
  await st
    .download(url, process.env.API_USER, process.env.API_PASS)
    .then(console.log)
    .catch((error) => {
      if (
        error.message.includes(
          "Cannot read properties of null (reading 'ticket')"
        )
      ) {
        console.log("Error: Wrong API parameters set.");
        return;
      }

      if (
        error.message.includes("Cannot read properties of null (reading 'url')")
      ) {
        console.log("Error: Invalid Streamtape link.");
        return;
      }

      console.log(error);
    });
}

getDownload();
