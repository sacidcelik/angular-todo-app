/// <reference types='Cypress' />

const testId = (id) => `[data-test-id="${id}"]`;
const TASK_INPUT = testId("task-input");
const TASKS_SECTION = testId("tasks-section");
const TASK = testId("task");
const ERROR_BOX = testId("error-box");
const ERROR_REQUIRED = testId("error-required");
const ERROR_CHARS = testId("error-chars");

describe("Add new task", () => {
  it("Adds new task when entering a string into the input field and pressing enter", () => {
    cy.visit("/");
    cy.get(TASK_INPUT).type("This is my test task").type("{enter}");
    cy.get(TASKS_SECTION).children().should("contain", "task");
    cy.get(TASKS_SECTION).get(TASK).should("contain", "This is my test task");
  });
  it("Throws an error and does not add task when the user tries to add an empty task", () => {
    cy.visit("/");
    cy.get(TASK_INPUT).type("{enter}");
    cy.get(ERROR_BOX).get(ERROR_REQUIRED).should("contain.text", "Error");
    cy.get(TASKS_SECTION).children().should("not.contain", "task");
  });
  it("Throws an error and does not add task when the user tries to add a task with only one character", () => {
    cy.visit("/");
    cy.get(TASK_INPUT).type("a").type("{enter}");
    cy.get(ERROR_BOX).get(ERROR_CHARS).should("contain.text", "Error");
    cy.get(TASKS_SECTION).children().should("not.contain", "task");
  });
});
