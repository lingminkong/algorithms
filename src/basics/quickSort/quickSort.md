# Quick sort

## Thoughts

- is the best strategy to pick the middle element as the pivot? 
  **No**
---

__*Thoughts: The middle element does not necessarily mean it is the middle element in the sorted result. So what benefit it brings if we pick the middle element, and what benefit we want to gain from a "good" pivot?*__

The pivot is critical to quick sort algorithm. It determines how the array is split in each recursive call. The efficiency of the quick sort depends on how balanced these splits are.

Always picking the first, last or medium element is not the best strategy, it increases the chance of having the worst performance, which is `O(n*n)`;

For example:
Given an array [1, 2, 3, 4, 5] and always pick the first element as the pivot, quick sort has to go through the entire array n times. ⬇️

```
1. [], 1, [2, 3, 4, 5]
2. [1], [], 2, [3, 4, 5]
3. [1, 2], [], 3, [4, 5]
4. [1, 2, 3], [], 4, [5]
5. [1, 2, 3, 4, 5]
```

**Randomizing the selection of pivot reduces the chance of hitting the worse scenario.**
```typescript
const pivotIndex = Math.floor(Math.random() * array.length);
const pivot = arr[pivotIndex];
```

---

__*Thoughts: From the initial look, the number of elements in smaller or larger array after the split does not matter in terms of space/time complexity. And the BigO is O(n*n)?*__

As shown above, the worst case is `O(n*n)`, and the average/best case is `O(n*logn)`.

## notes

We cannot use `array.length === 1` as the base case, as there are chances that the smaller array or larger array is empty, ~~so the base case should be `array.length === 0`~~;
The base case should be `array.length < 2` as when there is 0 or 1 element in the array, we simply just return it.
