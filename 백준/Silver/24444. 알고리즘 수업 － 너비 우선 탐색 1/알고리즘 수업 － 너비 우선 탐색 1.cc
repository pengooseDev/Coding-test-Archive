#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int main()
{
  int N, M, R;
  cin >> N >> M >> R;
  vector<vector<int>> graph(N + 1);
  vector<int> visited(N + 1, 0);
  vector<int> answer(N + 1, 0);
  int cnt = 1;

  for (int i = 1; i <= M; i++)
  {
    int s, e;
    cin >> s >> e;
    graph[s].push_back(e);
    graph[e].push_back(s);
  }

  for (int i = 1; i < N; i++)
    sort(graph[i].begin(), graph[i].end());

  queue<int> q;
  visited[R] = 1;
  q.push(R);

  while (!q.empty())
  {
    int curr = q.front();
    q.pop();
    answer[curr] = cnt++;

    for (int i : graph[curr])
    {
      if (!visited[i])
      {
        visited[i] = 1;
        q.push(i);
      }
    }
  }

  for (int i = 1; i <= N; i++)
    cout << answer[i] << "\n";

  return 0;
}