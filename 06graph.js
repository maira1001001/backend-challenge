/** @format */

const { logAnswer, logError, logMessage } = require('./consoleMessages');

class TreasuryGraph {
  constructor(numberOfVertices) {
    this.numberOfVertices = numberOfVertices;
    this.adjacencyList = new Map();
  }

  addVertex(v) {
    this.adjacencyList.set(v, []);
  }

  addVertices(vertices) {
    for (const vertex of vertices) {
      g.addVertex(vertex);
    }
  }

  addEdge(v, w) {
    const haveACycle = this.detectACicle(v, w);
    if (!haveACycle) {
      // directed graph, add one direction
      this.adjacencyList.get(v).push(w);
    } else {
      logError(`can not add edge ${v} and ${w}`);
    }
  }

  dfsCycles(currentVertex, endVertex, visited) {
    visited[currentVertex] = true;
    let haveACycle = false;
    if (currentVertex === endVertex) {
      haveACycle = true;
    } else {
      let getNeighbours = this.adjacencyList.get(currentVertex);
      let i = 0;
      while (!haveACycle && i < getNeighbours.length) {
        let nextVertex = getNeighbours[i];
        if (!visited[nextVertex]) {
          haveACycle = this.dfsCycles(nextVertex, endVertex, visited);
        }
        i++;
      }
    }
    return haveACycle;
  }

  detectACicle(initVertex, endVertex) {
    let visited = Array(this.numberOfVertices).fill(false);
    return this.dfsCycles(endVertex, initVertex, visited);
  }

  printGraph() {
    for (let i of this.adjacencyList.keys()) {
      let getValues = this.adjacencyList.get(i);
      let conc = '';
      for (let j of getValues) conc += j + ' ';
      console.log(i + ' -> ' + (conc || 'No children'));
    }
  }
}

// creating a graph

let g = new TreasuryGraph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
logMessage(
  `Creating graph with  ${vertices} vertices and adding the edges (A,B), (A,C), (A,D), (A,E), (D,E)`
);

// adding vertices
g.addVertices(vertices);

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('D', 'F');

// printing graph
g.printGraph();

// try to add an edge but it is a cycle
logMessage('The, try to add the edge (F,A), but it is a cycle');
g.addEdge('F', 'A');

// printing graph again, to test the edge (F,A) was not added
logMessage('Printing graph without (F,A) edge');
g.printGraph();
