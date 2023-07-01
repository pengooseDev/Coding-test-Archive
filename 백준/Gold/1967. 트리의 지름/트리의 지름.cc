#include <iostream>
#include <vector>
using namespace std;

pair<int, int> dfs(vector<vector<pair<int, int>>> &g, vector<bool> &v, int curr_node, int d)
{
  v[curr_node] = true;

  int max_d = d;
  int max_node = curr_node;

  for (pair<int, int> i : g[curr_node])
  {
    int next_node = i.first;
    int weight = i.second;

    if (!v[next_node])
    {
      pair<int, int> res = dfs(g, v, next_node, d + weight);
      if (res.first > max_d)
      {
        max_d = res.first;
        max_node = res.second;
      }
    }
  }

  return {max_d, max_node};
}

int main()
{
  int N;
  cin >> N;

  vector<vector<pair<int, int>>> graph(N + 1);
  vector<bool> visited(N + 1, false);

  for (int i = 1; i < N; i++)
  {
    int u, v, w;
    cin >> u >> v >> w;
    graph[u].push_back({v, w});
    graph[v].push_back({u, w});
  }

  pair<int, int> df = dfs(graph, visited, 1, 0);
  fill(visited.begin(), visited.end(), false);

  pair<int, int> ds = dfs(graph, visited, df.second, 0);
  cout << ds.first << endl;

  return 0;
}
