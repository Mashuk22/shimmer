document.documentElement.classList.remove("no-js");

const STORAGE_KEY = "user-color-scheme";
const COLOR_MODE_KEY = "--color-mode";

const modeToggleButton = document.querySelector(".js-mode-toggle");

/**
 * Pass in a custom prop key and this function will return its
 * computed value.
 */
const getCSSCustomProp = (propKey) => {
  let response = getComputedStyle(document.documentElement).getPropertyValue(
    propKey
  );

  // Tidy up the string if there’s something to work with
  if (response.length) {
    response = response.replace(/\'|"/g, "").trim();
  }

  // Return the string response by default
  return response;
};

/**
 * Takes either a passed settings ('light'|'dark') or grabs that from localStorage.
 * If it can’t find the setting in either, it tries to load the CSS color mode,
 * controlled by the media query
 */
const applySetting = (passedSetting) => {
  let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);

  if (currentSetting) {
    document.documentElement.setAttribute(
      "data-user-color-scheme",
      currentSetting
    );
  }
  setTimeout(function () {
    document.documentElement.classList.add("transition-body");
  }, 1000);
};

/**
 * Get’s the current setting > reverses it > stores it
 */
const toggleSetting = () => {
  let currentSetting = localStorage.getItem(STORAGE_KEY);

  switch (currentSetting) {
    case null:
      currentSetting =
        getCSSCustomProp(COLOR_MODE_KEY) === "dark" ? "light" : "dark";
      break;
    case "light":
      currentSetting = "dark";
      break;
    case "dark":
      currentSetting = "light";
      break;
  }

  localStorage.setItem(STORAGE_KEY, currentSetting);

  return currentSetting;
};

/**
 * Clicking the button runs the apply setting method which grabs its parameter
 * from the toggle setting method.
 */
modeToggleButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  applySetting(toggleSetting());
});

applySetting();
