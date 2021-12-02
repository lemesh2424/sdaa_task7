import Graph from "./Graph";

export const dijkstra = function(node: number[][], start: number) {
    let distances = [];

    for (let i = 0; i < node.length; i++) {
        distances[i] = Number.MAX_VALUE;
    }

    distances[start] = 0;

    let visited = [];

    while(true) {
        let shortestDistance = Number.MAX_VALUE;
        let shortestIndex = -1;

        for (let i = 0; i < node.length; i++) {
            if (distances[i] < shortestDistance && !visited[i]) {
                shortestDistance = distances[i];
                shortestIndex = i;
            }
        }
        
        console.log("Visiting node " + shortestDistance + " with current distance " + shortestDistance);

        if (shortestIndex === -1) {
            return distances;
        }

        for (let i = 0; i < node[shortestIndex].length; i++) {
            if (node[shortestIndex][i] !== 0 && distances[i] > distances[shortestIndex] + node[shortestIndex][i]) {
                distances[i] = distances[shortestIndex] + node[shortestIndex][i];
                console.log("Updating distance of node " + i + " to " + distances[i]);
            }
        }

        visited[shortestIndex] = true;
        console.log("Visited nodes: " + visited);
        console.log("Currently lowest distances: " + distances);
    }
}