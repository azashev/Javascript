function addItem() {
    const menu = document.getElementById("menu");
    const itemText = document.getElementById("newItemText");
    const itemValue = document.getElementById("newItemValue");
    const itemTextText = itemText.value;
    const itemValueValue = itemValue.value;

    const newItemText = itemTextText;
    const newItemValue = itemValueValue;

    const option = document.createElement("option");
    option.text = newItemText;
    option.value = newItemValue;
    menu.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}
