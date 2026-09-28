
// ======================================================
// SUPER PUNCH
// Superintendent Punch List App
// ======================================================


// ------------------------------------------------------
// 1. ORIGINAL PUNCH LIST
// ------------------------------------------------------
//
// These are the punch items from the original
// ProHome pre-closing report.
//
// Status options:
// open
// progress
// recheck
// complete
//

const originalPunchItems = [

    {
        id: 1,
        claim: 1,
        trade: "Painting",
        location: "Unit",
        description: "PTU",
        contractor: "Sierra Interiors",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 2,
        claim: 2,
        trade: "Appliances",
        location: "Kitchen",
        description: "Gas line under burners had a 90 degrees bend",
        contractor: "Logistics Plumbing",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 3,
        claim: 3,
        trade: "Cabinets",
        location: "Kitchen",
        description: "Touchup",
        contractor: "Sierra Interiors",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 4,
        claim: 4,
        trade: "Windows",
        location: "Foyer",
        description: "Locking switch very hard to lock",
        contractor: "Mountain Safe Windows",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 5,
        claim: 5,
        trade: "Windows",
        location: "Kitchen",
        description: "Windows still have film",
        contractor: "Legacy Cleaning",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 6,
        claim: 6,
        trade: "Fire Protection",
        location: "Breakfast Nook",
        description: "Hole around fire nozzles. Caulking around needs checking",
        contractor: "S&E Tex Drywall",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 7,
        claim: 7,
        trade: "Cabinets",
        location: "Kitchen",
        description: "Kickbacks don't match cabinet on a sink side",
        contractor: "Sierra Interiors",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 8,
        claim: 8,
        trade: "Cabinets",
        location: "Kitchen",
        description: "Green cabinet under oven not flush",
        contractor: "Sierra Interiors",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 9,
        claim: 9,
        trade: "Cabinets",
        location: "Laundry Room / Utility Room",
        description: "Drawer will not close. Adjust corner doors to not hit wall",
        contractor: "Sierra Interiors",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 10,
        claim: 10,
        trade: "Drywall",
        location: "Bathroom (Powder)",
        description: "No cover over fan",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 11,
        claim: 11,
        trade: "Windows",
        location: "Bedroom (Back)",
        description: "Paint stain on frame",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 12,
        claim: 12,
        trade: "Windows",
        location: "Bedroom (Back)",
        description: "Gaps in window frame. Broken risers",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 13,
        claim: 13,
        trade: "Tile",
        location: "Bathroom (En-Suite)",
        description:
            "Grab bars. 3. Entering shower on left side 12 in bar. Base 3 in above grout line. Right of water handles, 18 in bar just above grout line. Opposite wall, 18 in bar just above grout line.",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 14,
        claim: 14,
        trade: "Cabinets",
        location: "Closet (Primary)",
        description: "Grout line between floor and base of cab",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 15,
        claim: 15,
        trade: "Masonry",
        location: "Exterior",
        description: "Tape on patio vertical past",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 16,
        claim: 16,
        trade: "Doors",
        location: "Breakfast Nook",
        description: "No dead bolt",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 17,
        claim: 17,
        trade: "Painting",
        location: "Balcony / Terrace",
        description: "White paint on wall and on decking",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 18,
        claim: 18,
        trade: "Windows",
        location: "Basement",
        description: "Caulking at base of east windows cracked",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 19,
        claim: 19,
        trade: "Painting",
        location: "Basement",
        description: "PTU",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 20,
        claim: 20,
        trade: "Closet Systems",
        location: "Bedroom (Basement)",
        description: "Closet doors in both bedrooms missing bottom glides",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    },

    {
        id: 21,
        claim: 21,
        trade: "Caulking",
        location: "Bathroom (Basement)",
        description: "Gap at floor level",
        contractor: "",
        status: "open",
        dueDate: "",
        notes: "Punch List"
    }

];


// ------------------------------------------------------
// 2. LOAD SAVED DATA
// ------------------------------------------------------

let punchItems;

const savedItems =
    localStorage.getItem("superPunchItems");

if (savedItems) {

    punchItems = JSON.parse(savedItems);

} else {

    punchItems = originalPunchItems;

    saveData();
}


// ------------------------------------------------------
// 3. CURRENT FILTER
// ------------------------------------------------------

let currentStatusFilter = "all";


// ------------------------------------------------------
// 4. SAVE DATA
// ------------------------------------------------------

function saveData() {

    localStorage.setItem(
        "superPunchItems",
        JSON.stringify(punchItems)
    );
}


// ------------------------------------------------------
// 5. STATUS LABEL
// ------------------------------------------------------

function getStatusLabel(status) {

    if (status === "open") {
        return "Open";
    }

    if (status === "progress") {
        return "In Progress";
    }

    if (status === "recheck") {
        return "Recheck";
    }

    if (status === "complete") {
        return "Complete";
    }

    return status;
}


// ------------------------------------------------------
// 6. DISPLAY PUNCH ITEMS
// ------------------------------------------------------

function displayPunchItems(items = punchItems) {

    const container =
        document.getElementById("punchList");

    container.innerHTML = "";

    if (items.length === 0) {

        container.innerHTML = `
            <div class="empty-state">

                <h3>No punch items found</h3>

                <p>
                    Try changing your filters
                    or add a new punch item.
                </p>

            </div>
        `;

        return;
    }


    items.forEach(item => {

        const card =
            document.createElement("div");

        card.className =
            `punch-card status-${item.status}`;


        const contractor =
            item.contractor
                ? item.contractor
                : "Unassigned";


        const dueDate =
            item.dueDate
                ? item.dueDate
                : "No date";


        card.innerHTML = `

            <div class="punch-card-header">

                <div>

                    <div class="claim-number">
                        CLAIM #${item.claim}
                    </div>

                    <h3>
                        ${escapeHTML(item.trade)}
                    </h3>

                </div>


                <div
                    class="status-badge status-${item.status}"
                >
                    ${getStatusLabel(item.status)}
                </div>

            </div>


            <div class="location-line">
                📍 ${escapeHTML(item.location)}
            </div>


            <div class="description">
                ${escapeHTML(item.description)}
            </div>


            <div class="punch-details">

                <div class="detail-box">

                    <span>
                        CONTRACTOR
                    </span>

                    <strong>
                        ${escapeHTML(contractor)}
                    </strong>

                </div>


                <div class="detail-box">

                    <span>
                        DUE
                    </span>

                    <strong>
                        ${escapeHTML(dueDate)}
                    </strong>

                </div>

            </div>


            <div class="card-actions">

                <button
                    onclick="advanceStatus(${item.id})"
                >
                    Next Status
                </button>

                <button
                    onclick="editPunchItem(${item.id})"
                >
                    Edit
                </button>

                <button
                    onclick="deletePunchItem(${item.id})"
                >
                    Delete
                </button>

            </div>

        `;

        container.appendChild(card);
    });
}


// ------------------------------------------------------
// 7. UPDATE DASHBOARD COUNTS
// ------------------------------------------------------

function updateDashboard() {

    const total =
        punchItems.length;

    const open =
        punchItems.filter(
            item => item.status === "open"
        ).length;

    const progress =
        punchItems.filter(
            item => item.status === "progress"
        ).length;

    const recheck =
        punchItems.filter(
            item => item.status === "recheck"
        ).length;

    const complete =
        punchItems.filter(
            item => item.status === "complete"
        ).length;


    document.getElementById(
        "totalCount"
    ).textContent = total;


    document.getElementById(
        "openCount"
    ).textContent = open;


    document.getElementById(
        "progressCount"
    ).textContent = progress;


    document.getElementById(
        "recheckCount"
    ).textContent = recheck;


    document.getElementById(
        "completeCount"
    ).textContent = complete;
}


// ------------------------------------------------------
// 8. OPEN NEW ITEM FORM
// ------------------------------------------------------

function openNewItemForm() {

    document
        .getElementById("formOverlay")
        .classList.add("open");
}


// ------------------------------------------------------
// 9. CLOSE NEW ITEM FORM
// ------------------------------------------------------

function closeNewItemForm() {

    document
        .getElementById("formOverlay")
        .classList.remove("open");
}


// ------------------------------------------------------
// 10. SAVE NEW PUNCH ITEM
// ------------------------------------------------------

function savePunchItem() {

    const location =
        document
            .getElementById("itemLocation")
            .value
            .trim();


    const trade =
        document
            .getElementById("itemTrade")
            .value;


    const description =
        document
            .getElementById("itemDescription")
            .value
            .trim();


    const contractor =
        document
            .getElementById("itemContractor")
            .value
            .trim();


    const dueDate =
        document
            .getElementById("itemDueDate")
            .value;


    const status =
        document
            .getElementById("itemStatus")
            .value;


    const notes =
        document
            .getElementById("itemNotes")
            .value
            .trim();


    if (!location) {

        alert(
            "Please enter a location."
        );

        return;
    }


    if (!description) {

        alert(
            "Please enter a description."
        );

        return;
    }


    const nextId =
        punchItems.length > 0
            ? Math.max(
                ...punchItems.map(
                    item => item.id
                )
            ) + 1
            : 1;


    const nextClaim =
        punchItems.length > 0
            ? Math.max(
                ...punchItems.map(
                    item => item.claim
                )
            ) + 1
            : 1;


    const newItem = {

        id: nextId,

        claim: nextClaim,

        trade: trade,

        location: location,

        description: description,

        contractor: contractor,

        dueDate: dueDate,

        status: status,

        notes: notes

    };


    punchItems.push(newItem);


    saveData();

    updateDashboard();

    displayPunchItems(punchItems);

    clearForm();

    closeNewItemForm();
}


// ------------------------------------------------------
// 11. CLEAR NEW ITEM FORM
// ------------------------------------------------------

function clearForm() {

    document.getElementById(
        "itemLocation"
    ).value = "";


    document.getElementById(
        "itemDescription"
    ).value = "";


    document.getElementById(
        "itemContractor"
    ).value = "";


    document.getElementById(
        "itemDueDate"
    ).value = "";


    document.getElementById(
        "itemNotes"
    ).value = "";


    document.getElementById(
        "itemStatus"
    ).value = "open";
}


// ------------------------------------------------------
// 12. ADVANCE STATUS
// ------------------------------------------------------

function advanceStatus(id) {

    const item =
        punchItems.find(
            item => item.id === id
        );


    if (!item) {
        return;
    }


    if (item.status === "open") {

        item.status = "progress";

    } else if (
        item.status === "progress"
    ) {

        item.status = "recheck";

    } else if (
        item.status === "recheck"
    ) {

        item.status = "complete";

    } else {

        item.status = "open";
    }


    saveData();

    updateDashboard();

    applyFilters();
}


// ------------------------------------------------------
// 13. EDIT PUNCH ITEM
// ------------------------------------------------------

function editPunchItem(id) {

    const item =
        punchItems.find(
            item => item.id === id
        );


    if (!item) {
        return;
    }


    const newLocation =
        prompt(
            "Location:",
            item.location
        );


    if (newLocation === null) {
        return;
    }


    const newDescription =
        prompt(
            "Description:",
            item.description
        );


    if (newDescription === null) {
        return;
    }


    const newContractor =
        prompt(
            "Assigned contractor:",
            item.contractor
        );


    if (newContractor === null) {
        return;
    }


    const newDueDate =
        prompt(
            "Due date (YYYY-MM-DD):",
            item.dueDate
        );


    if (newDueDate === null) {
        return;
    }


    const newNotes =
        prompt(
            "Notes:",
            item.notes
        );


    if (newNotes === null) {
        return;
    }


    item.location =
        newLocation.trim();


    item.description =
        newDescription.trim();


    item.contractor =
        newContractor.trim();


    item.dueDate =
        newDueDate.trim();


    item.notes =
        newNotes.trim();


    saveData();

    applyFilters();
}


// ------------------------------------------------------
// 14. DELETE PUNCH ITEM
// ------------------------------------------------------

function deletePunchItem(id) {

    const item =
        punchItems.find(
            item => item.id === id
        );


    if (!item) {
        return;
    }


    const confirmed =
        confirm(
            `Delete Claim #${item.claim}?`
        );


    if (!confirmed) {
        return;
    }


    punchItems =
        punchItems.filter(
            item => item.id !== id
        );


    saveData();

    updateDashboard();

    applyFilters();
}


// ------------------------------------------------------
// 15. SEARCH
// ------------------------------------------------------

function searchPunchItems() {

    applyFilters();
}


// ------------------------------------------------------
// 16. TRADE FILTER
// ------------------------------------------------------

function filterPunchItems() {

    applyFilters();
}


// ------------------------------------------------------
// 17. STATUS FILTER
// ------------------------------------------------------

function filterByStatus(
    status,
    button = null
) {

    currentStatusFilter =
        status;


    setActiveFilterButton(
        button
    );


    applyFilters();
}


// ------------------------------------------------------
// 18. SHOW ALL ITEMS
// ------------------------------------------------------

function showAllItems(button = null) {

    currentStatusFilter =
        "all";


    document.getElementById(
        "tradeFilter"
    ).value = "all";


    document.getElementById(
        "searchInput"
    ).value = "";


    setActiveFilterButton(
        button
    );


    displayPunchItems(
        punchItems
    );
}


// ------------------------------------------------------
// 19. APPLY ALL FILTERS
// ------------------------------------------------------

function applyFilters() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const selectedTrade =
        document
            .getElementById("tradeFilter")
            .value;


    let filtered =
        [...punchItems];


    // STATUS

    if (
        currentStatusFilter !== "all"
    ) {

        filtered =
            filtered.filter(
                item =>
                    item.status ===
                    currentStatusFilter
            );
    }


    // TRADE

    if (
        selectedTrade !== "all"
    ) {

        filtered =
            filtered.filter(
                item =>
                    item.trade ===
                    selectedTrade
            );
    }


    // SEARCH

    if (searchText) {

        filtered =
            filtered.filter(item => {

                const searchableText = `

                    ${item.claim}

                    ${item.trade}

                    ${item.location}

                    ${item.description}

                    ${item.contractor}

                    ${item.notes}

                `.toLowerCase();


                return searchableText.includes(
                    searchText
                );
            });
    }


    displayPunchItems(
        filtered
    );
}


// ------------------------------------------------------
// 20. ACTIVE FILTER BUTTON
// ------------------------------------------------------

function setActiveFilterButton(
    clickedButton
) {

    const buttons =
        document.querySelectorAll(
            ".filter"
        );


    buttons.forEach(
        button =>
            button.classList.remove(
                "active"
            )
    );


    if (clickedButton) {

        clickedButton
            .classList
            .add("active");
    }
}


// ------------------------------------------------------
// 21. PROTECT HTML OUTPUT
// ------------------------------------------------------

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";
    }


    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );
}


// ------------------------------------------------------
// 22. RESET DEMO DATA
// ------------------------------------------------------
//
// We aren't putting this on a button yet.
// Later we can add a Settings screen.
//

function resetPunchList() {

    const confirmed =
        confirm(
            "Reset the entire punch list to the original report?"
        );


    if (!confirmed) {
        return;
    }


    punchItems =
        JSON.parse(
            JSON.stringify(
                originalPunchItems
            )
        );


    saveData();

    updateDashboard();

    displayPunchItems(
        punchItems
    );
}


// ------------------------------------------------------
// 23. START APP
// ------------------------------------------------------

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboard();

        displayPunchItems(
            punchItems
        );
    }
);
