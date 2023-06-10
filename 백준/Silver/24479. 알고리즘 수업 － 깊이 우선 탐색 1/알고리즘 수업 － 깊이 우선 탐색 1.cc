#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> visited;
vector<vector<int>> graph;
int cnt = 0;

void dfs(int curr_node)
{
  cnt += 1;
  visited[curr_node] = cnt;

  for (auto node : graph[curr_node])
    if (visited[node] == 0)
      dfs(node);
}

int main()
{
  int N, M, R;
  cin >> N >> M >> R;

  visited.resize(N + 1, 0);
  graph.resize(N + 1);

  for (int i = 0; i < M; i++)
  {
    int s, e;
    cin >> s >> e;
    graph[s].emplace_back(e);
    graph[e].emplace_back(s);
  }

  for (int i = 1; i <= N; i++)
    sort(graph[i].begin(), graph[i].end());

  dfs(R);

  for (int i = 1; i <= N; i++)
  {
    cout << visited[i] << "\n";
  }

  cout << endl;

  return 0;
}
