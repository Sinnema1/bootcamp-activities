import Powers from "../powers.js"

describe("Powers", () => {
    describe("Square", () => {
        it("should return the square of the provided number", () => {
            //Arrange -- create objects, setup data, do all the grunt work
            const inputVal = 3;
            const expected = 9;
            const p = new Powers();

            //Act -- run the code under test
            const result = p.square(inputVal);

            //Assert -- check the output and make sure it's correct
            expect(result).toEqual(expected);

        });
    });

})