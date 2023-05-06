/// <reference types="cypress" />

describe('Context: My First Test',  () => {


    beforeEach(() => {
        //run before each test case, beforeMethod in TestNG
        cy.clearCookies;
    })