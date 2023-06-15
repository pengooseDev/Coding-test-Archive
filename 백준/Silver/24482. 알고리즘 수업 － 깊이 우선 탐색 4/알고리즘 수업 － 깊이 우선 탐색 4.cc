#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

bool cmp(int a, int b)
{
  return a > b;
}

void dfs(vector<int> &v, vector<vector<int>> &g, int s, vector<int> &d)
{
  v[s] = 1;
  for (int i : g[s])
  {
    if (!v[i])
    {
      d[i] = d[s] + 1;
      dfs(v, g, i, d);
    }
  }
}

int main()
{
  int N, M, R;
  cin >> N >> M >> R;
  vector<vector<int>> graph(N + 1);
  vector<int> visited(N + 1, 0);

  for (int i = 0; i < M; i++)
  {
    int s, e;
    cin >> s >> e;
    graph[s].push_back(e);
    graph[e].push_back(s);
  }

  vector<int> depth(N + 1, -1);
  depth[R] = 0;

  for (int i = 0; i < N + 1; i++)
    sort(graph[i].begin(), graph[i].end(), cmp);

  dfs(visited, graph, R, depth);

  for (int i = 1; i <= N; i++)
    cout << depth[i] << "\n";

  return 0;
}