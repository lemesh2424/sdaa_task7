import { dijkstra } from "./Dijkstra";
import Graph from "./Graph";

function main() {
    const graph = new Graph(8);

    graph.addEdge(1, 3, 2);
    graph.addEdge(3, 2, 5);
    graph.addEdge(5, 7, 2);
    graph.addEdge(7, 1, 3);
    graph.addEdge(2, 6, 9);

    graph.printMatrix();

    const distances = dijkstra(graph.node, 1);
    console.log(distances);
}

main();