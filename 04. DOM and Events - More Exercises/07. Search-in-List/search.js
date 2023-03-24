function search() {
   const towns = Array.from(document.querySelectorAll("#towns li"));
   const result = document.getElementById("result");
   const searchTextEl = document.getElementById("searchText");
   const searchText = searchTextEl.value;
   
   let matches = 0;

   towns.forEach(town => {
      town.style.fontWeight = "400";
      town.style.textDecoration = "none";
   });
   towns.forEach(town => {
      if (town.textContent.includes(searchText) && searchText !== "") {
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches += 1;
      }
   });
   searchTextEl.value = "";
   result.textContent = `${matches} matches found`;
}
