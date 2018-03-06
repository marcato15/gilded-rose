# SPECS

## Attributes
* sell-in value:  denotes the number of days we have to sell the item
* quality value:  denotes how valuable the item is

## Methods
* method: At the end of each day our system lowers both values for every item

* Once the sell by date has passed, quality degrades twice as fast
* The quality of an item is never negative

## Special Cases
* "Aged Brie" actually increases in quality the older it gets
* The quality of an item is never more than 50, except Sulfuras
* "Sulfuras", being a legendary item, never has to be sold or decreases in quality
* "Backstage passes", like aged brie, increases in quality as it's sell-in value approaches; quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but quality drops to 0 after the concert
* "Conjured" items degrade in quality twice as fast as normal items
