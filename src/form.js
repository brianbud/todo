export default function createTodoForm() {
  const form = document.createElement("form");

  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "Create new to-do item";

  const titleLabel = document.createElement("label");
  titleLabel.for = "title";
  titleLabel.textContent = "Title";
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.id = "title";
  fieldset.appendChild(titleLabel);
  fieldset.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "description";
  descriptionLabel.textContent = "Description";
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  fieldset.appendChild(descriptionLabel);
  fieldset.appendChild(descriptionInput);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.for = "dueDate";
  dueDateLabel.textContent = "Due Date";
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.name = "date";
  dueDateInput.id = "dueDate";
  fieldset.appendChild(dueDateLabel);
  fieldset.appendChild(dueDateInput);

  // Priority Level Select Field
  const priorityLabel = document.createElement("label");
  priorityLabel.for = "priority";
  priorityLabel.textContent = "Priority Level";
  const prioritySelect = document.createElement("select");
  prioritySelect.name = "priority";
  prioritySelect.id = "priority";

  //Options for Priority Select
  const standardOption = document.createElement("option");
  standardOption.value = "default";
  standardOption.textContent = "Standard";

  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.textContent = "High";

  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.textContent = "Low";

  // Append Options to Priority Select
  prioritySelect.appendChild(standardOption);
  prioritySelect.appendChild(highOption);
  prioritySelect.appendChild(lowOption);
  fieldset.appendChild(priorityLabel);
  fieldset.appendChild(prioritySelect);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add todo";

  fieldset.appendChild(submitButton);

  form.appendChild(fieldset);

  return form;
}
