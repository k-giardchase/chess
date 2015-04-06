describe('chess', function() {
    it("is false when the queen x-pos and target x-pos do not match", function() {
        expect(chess([1,1], [2,3])).to.equal(false);
    });

    it("is true when the queen x-pos and target x-pos match", function() {
        expect(chess([1,1], [1,3])).to.equal(true);
    });

    it("is true when the queen y-pos and target y-pos match", function() {
        expect(chess([1,1], [3,1])).to.equal(true);
    });

    it("is true when the queen pos and target pos are diagonal", function() {
        expect(chess([1,1], [3,3])).to.equal(true);
    });

    it("is true when the queen pos and target pos are diagonal", function() {
        expect(chess([1,3], [3,1])).to.equal(true);
    });
});
