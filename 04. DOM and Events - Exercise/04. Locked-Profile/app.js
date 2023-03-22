function lockedProfile() {
    const buttons = Array.from(document.getElementsByTagName("button"));
    buttons
        .forEach((btn) => btn.addEventListener("click", toggleInfo));

    
    function toggleInfo(e) {
        const btn = e.currentTarget;
        const currentProfile = btn.parentElement;
        const hiddenInfo = Array.from(currentProfile.children)[9];
        const isUnlocked = Array.from(currentProfile.children)[4];

        if (isUnlocked.checked) {
            if (btn.textContent === "Show more") {
                hiddenInfo.style.display = "block";
                btn.textContent = "Hide it";
            } else if (btn.textContent === "Hide it") {
                hiddenInfo.style.display = "none";
                btn.textContent = "Show more";
            }        
        }
    }
}
