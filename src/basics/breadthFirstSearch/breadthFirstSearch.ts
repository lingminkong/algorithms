const breadthFirstSearch = (graph: Record<string, string[]>, startNode: string): boolean => {
  const queue = graph[startNode] ?? [];
  const checkedSet = new Set();
  checkedSet.add(startNode);
  let count = 0;

  while(queue.length >= 1) {
    const name = queue.shift() as string;

    if (checkedSet.has(name)) {
      continue;
    }
    console.log(`checking... 🤔${name}`);
    count += 1;

    if (isGoat(name)) {
      console.log(`GOAT is found after checking ${count} times`)
      return true;
    }

    checkedSet.add(name);
    queue.push(...(graph[name] ?? []))
  }

  console.log(`GOAT is NOT found after checking ${count} times`);
  return false;
}

const graph = {
  alice: ['bob', 'cathy'],
  bob: [],
  cathy: ['david', 'alice', 'emma'],
  david: ['fernando', 'emma'],
  emma: ['george', 'hunter'],
  fernando: ['jordan'],
  george: ['jordan'],
  hunter: ['biden'],
  biden: [],
}

const isGoat = (name: string) => name === 'jordan';

breadthFirstSearch(graph, 'alice');