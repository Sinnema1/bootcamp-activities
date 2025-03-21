// Describe the test suite for API Requests
describe("API Requests", () => {
  // Define interfaces for Thought and Comment
  interface Thought {
    _id: string;
    thoughtText: string;
    thoughtAuthor: string;
    createdAt: string;
    comments?: Comment[];
  }

  interface Comment {
    _id: string;
    commentText: string;
  }

  // Mock data for thoughts
  const mockThoughts: Thought[] = [
    {
      _id: "1",
      thoughtText: "This is a test thought",
      thoughtAuthor: "testAuthor",
      createdAt: "January 1, 2024",
      comments: [
        {
          _id: "1",
          commentText: "This is a test comment",
        },
      ],
    },
    {
      _id: "2",
      thoughtText: "This is another test thought",
      thoughtAuthor: "testAuthor2",
      createdAt: "January 2, 2024",
    },
  ];

  // New thought data for POST request
  const newThought = {
    _id: "3",
    thoughtText: "This is a new test thought",
    thoughtAuthor: "newTestAuthor",
  };

  // Context for tests related to Thought Requests with starting data
  context("Thought Requests with starting data", () => {

    // Before each test, intercept the GET request for thoughts and visit the homepage
    beforeEach(() => {
      cy.intercept("GET", "/api/thought", mockThoughts).as("getThoughts");
      cy.visit("/");
    });

    // Test to check if all thoughts are fetched on page load
    it("should GET all thoughts on page load", () => {
      cy.wait("@getThoughts")
        .its("response.body")
        .should("deep.equal", mockThoughts);
    });

    // Test to check if a single thought is fetched on card click
    it("should GET a single thought on card click", () => {
      cy.intercept("GET", "/api/thought/1", mockThoughts[0]).as("getThought");

      cy.get('a[href="/thoughts/1"]').click();

      cy.wait("@getThought")
        .its("response.body")
        .should("deep.equal", mockThoughts[0]);

      cy.url().should("include", `/thoughts/${mockThoughts[0]._id}`);
    });

    // Test to check if a new thought is posted to the existing list
    it("should POST a new thought to the existing list", () => {
      const updatedThoughts = [...mockThoughts];

      cy.intercept("GET", "/api/thought", [...updatedThoughts, newThought]).as(
        "getUpdatedThoughts"
      );

      cy.intercept("POST", "/api/thought", (req) => {
        req.reply({ statusCode: 201, body: req.body });
      }).as("postThought");

      cy.get('textarea[name="thoughtText"]').type(newThought.thoughtText);
      cy.get('input[name="thoughtAuthor"]').type(newThought.thoughtAuthor);
      cy.get('[data-cy="thought-form"]').submit();

      cy.wait("@postThought").then(({ response }) => {
        expect(response.statusCode).to.equal(201);
        expect(response.body.thoughtText).to.eq(newThought.thoughtText);
        expect(response.body.thoughtAuthor).to.eq(newThought.thoughtAuthor);
      });
    });

    // Test to check if an error is returned when the POST request fails
    it("should return an error when POST request fails", () => {
      cy.intercept("POST", "/api/thought", {
        statusCode: 500,
        body: { message: "Server Error" },
      }).as("postThought");

      cy.get('textarea[name="thoughtText"]').type(newThought.thoughtText);
      cy.get('input[name="thoughtAuthor"]').type(newThought.thoughtAuthor);
      cy.get('[data-cy="thought-form"]').submit();

      cy.wait("@postThought").then(({ response }) => {
        expect(response.statusCode).to.equal(500);
        expect(response.body.message).to.eq("Server Error");
      });
    });
  });
});