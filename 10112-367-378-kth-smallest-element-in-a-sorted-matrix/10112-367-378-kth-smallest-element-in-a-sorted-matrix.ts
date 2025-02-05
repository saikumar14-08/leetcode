function kthSmallest(matrix: number[][], k: number): number {
    let ip: number[] = matrix.flat();
    ip.sort((a,b) => a-b)
    return ip[k-1]
};