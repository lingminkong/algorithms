# Quick sort

## questions

- is the best strategy to pick the middle element as the pivot?

The middle element does not necessarily mean it is the middle element in the sorted result. So what benefit it brings if we pick the middle element, and what benefit we want to gain from a "good" pivot?

From the initial look, the number of elements in smaller or larger array after the split does not matter in terms of space/time complexity. And the BigO is O(n2)? **This looks wrong.**

## notes

We cannot use `array.length === 1` as the base case, as there are chances that the smaller array or larger array is empty, so the base case should be `array.length === 0`;
