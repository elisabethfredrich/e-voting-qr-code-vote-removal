
export const downloadFile = (content, title) => {
  var element = document.createElement("a");
  element.setAttribute("href", content);
  element.setAttribute("download", title);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};