// ===== Selected object from the toolbar =====
let selectedObject = null;

// ===== Toolbar object selection =====
document.querySelectorAll("#toolbar button").forEach(button => {
    button.addEventListener("click", () => {
        selectedObject = button.dataset.object;

        // Highlight the selected button
        document.querySelectorAll("#toolbar button").forEach(b => b.style.border = "");
        button.style.border = "2px solid yellow";
    });
});

// ===== Grid setup =====
const grid = document.getElementById("grid");
const rows = 30;   // number of rows
const cols = 40;   // number of columns

for (let i = 0; i < rows * cols; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    // Click to place/remove object
    tile.addEventListener("click", () => {
        if (!selectedObject) return;

        // Remove existing object if any
        tile.innerHTML = "";

        // Create new object image
        const img = document.createElement("img");
        img.src = `images/${selectedObject}.png`; // make sure your PNGs are in images/
        img.style.width = "100%";
        img.style.height = "100%";
        tile.appendChild(img);
    });

    grid.appendChild(tile);
}
