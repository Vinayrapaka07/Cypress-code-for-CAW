const data = [
  { name: "Bob", age: 20, gender: "male" },
  { name: "George", age: 42, gender: "male" },
  { name: "Sara", age: 42, gender: "female" },
  { name: "Conor", age: 40, gender: "male" },
  { name: "Jennifer", age: 42, gender: "female" },
];
const convertingarraytoString = (data) => {
  return JSON.stringify(data);
};
const resulttext = convertingarraytoString(data);

describe("test suite for CAW Assignment", function () {
  it("Test case for dynamic HTML table Tag", function () {
    // The below line is hits the page
    cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html");
    // geting the Table data and clicking on it
    cy.get("summary").click();
    // grabing the elements into the box
    cy.get("#jsondata")
      .clear()
      .type(resulttext, { parseSpecialCharSequences: false });
    // clicking the refresh button
    cy.get("#refreshtable").click();
    // asserting the table with given data
    cy.get("tr")
      .next()
      .each(($el, index) => {
        cy.wrap($el).find("td").eq(0).should("contain", data[index].name);
        cy.wrap($el).find("td").eq(1).should("contain", data[index].age);
        cy.wrap($el).find("td").eq(2).should("contain", data[index].gender);
      });
  });
});
