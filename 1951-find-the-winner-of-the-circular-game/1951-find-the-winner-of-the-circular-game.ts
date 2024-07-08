function findTheWinner(n: number, k: number): number {
   let circle = [];
    for (let i = 1; i <= n; ++i) {
        circle.push(i);
    }
    let cur_ind = 0;

    while (circle.length > 1) {
        let next_to_remove = (cur_ind + k - 1) % circle.length;
        circle.splice(next_to_remove, 1);
        cur_ind = next_to_remove;
    }

    return circle[0];
};