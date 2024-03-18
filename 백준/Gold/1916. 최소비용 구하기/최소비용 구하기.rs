use std::collections::BinaryHeap;
use std::cmp::Reverse;
use std::io;
use std::io::Read;
use std::collections::HashMap;

fn main() {
    let mut buffer = String::new();
    io::stdin().read_to_string(&mut buffer).unwrap();

    let mut iter = buffer.split_whitespace();
    let n: usize = iter.next().unwrap().parse().unwrap();
    let m: usize = iter.next().unwrap().parse().unwrap();
    let mut graph: HashMap<usize, Vec<(usize, usize)>> = HashMap::new();

    for _ in 0..m {
        let a: usize = iter.next().unwrap().parse().unwrap();
        let b: usize = iter.next().unwrap().parse().unwrap();
        let c: usize = iter.next().unwrap().parse().unwrap();
        graph.entry(a).or_insert(Vec::new()).push((b, c));
    }

    let start: usize = iter.next().unwrap().parse().unwrap();
    let end: usize = iter.next().unwrap().parse().unwrap();
    let mut dist: Vec<usize> = vec![std::usize::MAX; n + 1];
    let mut heap: BinaryHeap<Reverse<(usize, usize)>> = BinaryHeap::new();

    dist[start] = 0;
    heap.push(Reverse((0, start)));

    while let Some(Reverse((cost, node))) = heap.pop() {
        if dist[node] < cost {
            continue;
        }

        for (next, next_cost) in graph.get(&node).unwrap_or(&Vec::new()) {
            let next_cost = cost + next_cost;

            if next_cost < dist[*next] {
                dist[*next] = next_cost;
                heap.push(Reverse((next_cost, *next)));
            }
        }
    }

    println!("{}", dist[end]);
}