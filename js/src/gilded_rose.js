function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

let items = []

function update_quality() {

    function basicAdjustment(item, x = 1){
        if(item.sell_in <= 0){
            return item.quality - 2 * x;
        }
        return item.quality - 1 * x;
    }

    function conjuredAdjustment(item){
        return basicAdjustment(item, 2);
    }
    function brieAdjustment(item){
        return basicAdjustment(item, -1);
    }
    function sulfurasAdjustment(item){
        return basicAdjustment(item, 0);
    }

    function backstageAdjustment(item){
        if(item.sell_in <= 0){
            return 0;
        }
        if(item.sell_in <= 5){
            return item.quality + 3;
        }
        if(item.sell_in <= 10){
            return item.quality + 2;
        }
        return item.quality + 1;
        
    }
    function sulfurasAdjustment(item){
        return item.quality;
    }

    function determineCategory(item){
        const categories = ["brie","backstage","sulfuras","conjured"];
        const category = categories.find( categorySlug => item.name.toLowerCase().indexOf(categorySlug) !== -1);
        return category;
    }

    function determineQuality(item){
        // Determine Type of Item by looking for key term

        let newQuality = 0;
        switch(determineCategory(item)){
            case "brie":
                newQuality = brieAdjustment(item);
                break;
            case "backstage":
                newQuality = backstageAdjustment(item);
                break;
            case "sulfuras":
                newQuality = sulfurasAdjustment(item);
                break;
            case "conjured":
                newQuality = conjuredAdjustment(item);
                break;
            default:
                newQuality = basicAdjustment(item);
                break;
        }

        // Never below zero
        if(newQuality < 0){
            newQuality = 0;
        }
        
        // Items can't ever increase above 50, but can be set to > 50
        if(item.quality !== newQuality && newQuality > 50){
            newQuality = 50;
        }

        return newQuality;
    }
    function determineDay(item){
        if(determineCategory(item) === "sulfuras"){ 
            return item.sell_in;
        }
        return item.sell_in - 1;
    }

    items.forEach( item => {
        item.quality = determineQuality(item);
        item.sell_in = determineDay(item);
    });
}
