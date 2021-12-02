export default class Graph {
    public node: number[][];
    public size: number;

    constructor(size: number) {
        if (size <= 0) {
            return;
        }

        this.node = Array(size).fill(0).map(() => new Array(size).fill(0));
        this.size = size;
    }

    public addEdge(vertex1: number, vertex2: number, weight = 1) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.node[vertex1][vertex2] = weight;
            this.node[vertex2][vertex1] = weight;
        }
    }

    public removeEdge(vertex1: number, vertex2: number) {
        if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
            console.log('invalid vertex');
        } else if (vertex1 === vertex2) {
            console.log('same vertex');
        } else {
            this.node[vertex1][vertex2] = 0;
            this.node[vertex2][vertex1] = 0;
        }
    }

    public addVertex() {
        this.size++;
        this.node.push([]);

        for (let i = 0; i < this.size; i++) {
            this.node[i][this.size - 1] = 0;
            this.node[this.size - 1][i] = 0;
        }
    }

    public removeVertex(vertex: number) {
        if (vertex < 0 || vertex > this.size - 1) { 
            console.log('Invalid vertex');
        } else { 
            while ( vertex < this.size - 1) {  
                for (let i = 0; i < this.size; i++) { 
                    this.node[i][vertex] = this.node[i][vertex + 1]; 
                } 
                for (let i = 0; i < this.size; i++) { 
                    this.node[vertex][i] = this.node[vertex + 1][i]; 
                } 
                vertex++; 
            } 
            this.node.pop();
            this.size--;
        } 
    }

    public printMatrix() {
        for (let i = 0; i < this.size; i++) {
            let row = '';
            for (let j = 0; j < this.size; j++) {
                row += ` ${this.node[i][j]}`;
            }
            console.log(row)
        }
    }
}