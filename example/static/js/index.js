const CHECKED_CLASSNAME = "checked";

/**
 * Function to handle the click event for a list item
 * @param e The element which was clicked
 */
function onItemClick(e) {
    const classList = e.classList;

    // Check whether the list of class names attached to this element
    // contains the "checked".
    if (classList.contains(CHECKED_CLASSNAME)) {
        // The list contains the class name, so we should remove it
        classList.remove(CHECKED_CLASSNAME);
    } else {
        // Otherwise, we add it in
        classList.add(CHECKED_CLASSNAME);
    }
}
