function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchInput = document.getElementById("searchField");

   function onClick() {
      const searchWord = searchInput.value;
      const rows = Array.from(document.querySelectorAll("tbody tr"));
      
      for (const row of rows) {
         row.classList.remove("select");
         let rowText = row.textContent.trim();
         if (searchWord != '' && rowText.includes(searchWord)) {
            row.classList.add("select");
         }
      }
      searchInput.value = '';
   }
}
