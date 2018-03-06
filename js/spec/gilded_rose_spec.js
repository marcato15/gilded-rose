describe("Gilded Rose", function() {

    it("should not alter name", function() {
        items = [ new Item("foo", 2, 0) ];
        update_quality();
        expect(items[0].name).toEqual("foo");
    });

    it("should decrease sell in every day", function() {
        items = [ new Item("foo", 2, 0) ];
        update_quality();
        expect(items[0].sell_in).toEqual(1);
        update_quality();
        expect(items[0].sell_in).toEqual(0);
    });
    it("should decrease quality every day by 1 before expiration", function() {
        items = [ new Item("foo", 2, 2) ];
        update_quality();
        expect(items[0].quality).toEqual(1);
        update_quality();
        expect(items[0].quality).toEqual(0);
    });
    it("should decrease quality every day by 2 after expiration", function() {
        items = [ new Item("foo", 0, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(8);
        update_quality();
        expect(items[0].quality).toEqual(6);
    });
    it("should never decrease quality below 0", function() {
        items = [ new Item("foo", 0, 0) ];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });
    it("should increase quality of Aged Brie every day by 1 before expiration", function() {
        items = [ new Item("Aged Brie", 10, 0) ];
        update_quality();
        expect(items[0].quality).toEqual(1);
        update_quality();
        expect(items[0].quality).toEqual(2);
    });
    it("should increase quality of Aged Brie every day by 2 after expiration", function() {
        items = [ new Item("Aged Brie", 0, 0) ];
        update_quality();
        expect(items[0].quality).toEqual(2);
        update_quality();
        expect(items[0].quality).toEqual(4);
    });
    it("should not increase quality of Aged Brie above 50", function() {
        items = [ new Item("Aged Brie", 0, 50) ];
        update_quality();
        expect(items[0].quality).toEqual(50);
    });
    it("should not modify Sulfuras", function() {
        items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
        update_quality();
        expect(items[0].quality).toEqual(80);
    });
    it("should increase backstage quality before sell in", function() {
        items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(11);
        update_quality();
        expect(items[0].quality).toEqual(12);
    });
    it("should increase backstage quality 5 < x < 11 days before sell in by 2", function() {
        items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(12);
    });
    it("should increase backstage quality 1 < x < 6 days before sell in by 3", function() {
        items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(13);
    });
    it("should set backstage quality to 0 after sell in", function() {
        items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(0);
    });
    it("should not set backstage quality to greater than 50 ", function() {
        items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50) ];
        update_quality();
        expect(items[0].quality).toEqual(50);
    });
    it("should degrade quality of conjured items by 2 before expiration", function() {
        items = [ new Item("Conjured", 10, 10) ];
        update_quality();
        expect(items[0].quality).toEqual(8);
        update_quality();
        expect(items[0].quality).toEqual(6);
    });
    it("should degrade quality of conjured items by 4 after expiration", function() {
        items = [ new Item("Conjured", 0, 12) ];
        update_quality();
        expect(items[0].quality).toEqual(8);
    });

});
