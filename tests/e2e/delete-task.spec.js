/// <reference types='Cypress' />

const testId = (id) => `[data-test-id="${id}"]`;
const TASK_INPUT = testId("task-input");
const TASKS_SECTION = testId("tasks-section");
const TASK = testId("task");
const DELETE_BUTTON = testId("delete-button");
const DELETE_CONFIRM = testId("delete-confirm");
const DELETE_ALL_BUTTON = testId("delete-all-button");
const DELETE_ALL_CONFIRM = testId("delete-all-confirm");

function addTask(description) {
  cy.visit("/");
  cy.get(TASK_INPUT).type(description).type("{enter}");
}

describe("Deleting tasks", () => {
  it("Deletes a single task but asks for confirmation if task is not completed", () => {
    addTask("My new task");
    cy.get(TASK).get(DELETE_BUTTON).click({ force: true });
    cy.get(DELETE_CONFIRM).click();
    cy.get(TASKS_SECTION).children().should("not.contain", "task");
  });
  it("Deletes all tasks but asks for confirmation", () => {
    addTask("My new task");
    addTask("My second task");
    cy.get(DELETE_ALL_BUTTON).click();
    cy.get(DELETE_ALL_CONFIRM).click();
    cy.get(TASKS_SECTION)
      .children()
      .should("not.contain", "task")
      .and("not.contain", "second");
  });
});
