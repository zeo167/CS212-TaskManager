// function to make a skill added to the item 
// using this outline to  make the task data (franklin)
function addSkillItem(skill) {
    const $skillName = $("<span>")
        .addClass("skill-name")
        .attr({ role: "button", tabindex: 0 })
        .text(skill);
    // adds the delete button to each new task 
    const $deleteButton = $("<button>")
        .attr("type", "button")
        .addClass("btn btn-danger btn-xs delete-skill")
        .text("Delete");

    return $("<li>")
        .addClass("list-group-item")
        .append($skillName, " ", $deleteButton);
}