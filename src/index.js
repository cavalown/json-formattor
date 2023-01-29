
const inputData = document.getElementById("input-data");
inputData.style.color = "grey";

const outputData = document.getElementById("output-data");

const btnValidate = document.getElementById("btnValidate");

const btnFormat = document.getElementById("btnFormat");

const btnDownload = document.getElementById("btnDownload");

btnFormat.addEventListener("click", () => {
  const formattedData = JSON.stringify(JSON.parse(inputData.value), null, 2);
  outputData.value = formattedData;
  outputData.style.color = "grey";
});

btnValidate.addEventListener("click", () => {
  try {
    const jsonData = JSON.parse(inputData.value);
    outputData.value = "JSON Validated!" + "\n\n" + JSON.stringify(jsonData);
    outputData.style.color = "green";
  } catch (error) {
    outputData.value = `Not JSON: ${error}`;
    outputData.style.color = "red";
  }
});

btnDownload.addEventListener("click", () => {

})

/**
sample json:

{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}
*/
