function editElement(element, match, replacer) {
    let txt = element.textContent;

    while (txt.includes(match)) {
        txt = txt.replace(match, replacer);
    }

    element.textContent = txt;
}
