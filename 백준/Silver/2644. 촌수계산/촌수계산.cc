#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int bfs(vector<vector<int>> &g, vector<bool> &v, int start_node, int end_node)
{
  queue<pair<int, int>> q;
  q.push({start_node, 0});

  while (!q.empty())
  {
    pair<int, int> curr = q.front();
    int curr_node = curr.first;
    int curr_count = curr.second;
    q.pop();

    v[curr_node] = true;

    if (curr_node == end_node)
      return curr_count;

    for (auto next_node : g[curr_node])
      if (!v[next_node])
        q.push({next_node, curr_count + 1});
  }

  return -1;
}

int main()
{
  int P;
  cin >> P;

  int a, b;
  cin >> a >> b;

  int N;
  cin >> N;

  vector<vector<int>> graph(P + 1);
  vector<bool> visited(P + 1);

  for (int i = 0; i < N; i++)
  {
    int s, e;
    cin >> s >> e;

    graph[s].push_back(e);
    graph[e].push_back(s);
  }

  int answer;
  answer = bfs(graph, visited, a, b);

  cout << answer << endl;

  return 0;
}