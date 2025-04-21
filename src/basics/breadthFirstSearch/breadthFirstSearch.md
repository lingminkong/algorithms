# Breadth-first search

## Introduction

Breadth-first search is an graph related algorithm that used to answer the following question in the context of a graph:
- is there a path from A to B?
- what is the shortest path from A to B?

Breadth-first search algorithm, as its name states, always searches from the first level relations first, then expand to the second level then third level relations until it finds the target or loops through the entire graph.

## Basic steps

1. start from node A, grab all its direct neighbors, and enqueue them to a queue
2. loop through each element in the queue, and:
3. first check if the element has been checked already - to prevent bi-direction infinite loop, skip if it had been checked. If not:
4. check if the given element is the target
   1. if yes, return this element
   2. if no, mark this element as checked and enqueue all direct neighbors of this element
5. loop through the queue


> BFS needs to search the list items **in the order they were added to the list**, otherwise it cannot get the shortest path. That's why a queue is needed for BFS.

## runtime analysis

*The Big O performance of this algorithm is O(V+E), vertices + edges of the graph. why it is not 2E?*

**Answer**
Incorrect assumption: vertices should proximately equal to edges.
- graph is different from trees
  - in dense graph, E can be close to V*V
  - in sparse graph, E can be much smaller than V

**The algorithm needs to travel through each edge and visit each node, so the time complexity of BFS is O(V+E). The queue needs to store V elements at most, so the space complexity of BFS is O(V).**