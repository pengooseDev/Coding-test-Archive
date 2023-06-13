#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> graph;
vector<bool> visited;

void dfs(int curr_node)
{
  visited[curr_node] = true;

  for (int next_node : graph[curr_node])
    if (!visited[next_node])
      dfs(next_node);
}

int main()
{
  int N, M;
  cin >> N >> M;
  visited.resize(N + 1, false);
  graph.resize(N + 1);

  for (int i = 0; i < M; i++)
  {
    int s, e;
    cin >> s >> e;

    graph[s].push_back(e);
    graph[e].push_back(s);
  }

  int answer = 0;

  for (int i = 1; i <= N; i++)
  {
    if (!visited[i])
    {
      dfs(i);
      answer++;
    }
  }

  cout << answer << endl;

  return 0;
}