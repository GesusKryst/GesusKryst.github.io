function init()
{
    document.getElementById("add_entry").addEventListener("click", addEntry);
}

var totalEntries = 0;

function createEntry()
{
    // Create Container
    let entryID = "entry" + totalEntries;
    totalEntries++;
    let newEntry = addElement("div", "entry", entryID);

    // Create Entry Elements
        // Check Box
    let entryCheck = addElement("input", "entry_checkbox", "entry_checkbox");
    entryCheck.setAttribute("type", "checkbox");
    entryCheck.addEventListener("click", strikeOut);
        
        // Title
    let entryTitle = addElement("input", "entry_title", "entry_title");
    entryTitle.setAttribute("type", "text");

        // Delete Button
    let entryDelete = addElement("button", null, "entry_delete");
    entryDelete.innerText = "🗑️";
    entryDelete.addEventListener("click", deleteEntry);

    let controls = [entryCheck, entryTitle, entryDelete];
    for(thing of controls)
    {
        newEntry.appendChild(thing);
    }

    return newEntry;
}

function strikeOut(anEvent)
{
    // Get the checkbox and input of the entry
    let checkboxNode = anEvent.currentTarget;
    let inputTextBox = checkboxNode.parentElement.children[1];
    if(checkboxNode.checked)
    {
        inputTextBox.style.textDecoration = "line-through";
    }
    else
    {
        inputTextBox.style.textDecoration = "none";
    }
}

function deleteEntry(anEvent)
{
    // Get the delete button's entry node and the list node
    let entryNode = anEvent.currentTarget.parentElement;
    let entryNodeParent = entryNode.parentElement;
    
    // Delete the entry
    entryNodeParent.removeChild(entryNode);

    // Show "add entry" if no entries exist
    if(entryNodeParent.children.length == 2)
    {
        document.getElementsByClassName("nothing_message")[0].style.display = "inherit";
        document.getElementsByClassName("nothing_message")[1].style.display = "inherit";
        totalEntries = 0;
    }
    
}


function addElement(tagType, tagClass = null,
        tagID = null)
{
    // Hide no items message
    document.getElementsByClassName("nothing_message")[0].style.display = "none";
    document.getElementsByClassName("nothing_message")[1].style.display = "none";

    // Create a tag with the specified class
    let newElement = document.createElement(tagType);
    if(tagClass != null)
    {
        newElement.setAttribute("class", tagClass);
    }

    // Create a tag with the specified ID
    if(tagID != null)
    {
        newElement.setAttribute("id", tagID);
    }

    return newElement;
}


function addEntry()
{
    // Create a new div container with all entry features
    let container = document.getElementById("container");
    container.appendChild(createEntry());
}

window.onload = init();