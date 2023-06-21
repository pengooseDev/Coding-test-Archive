#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main()
{
  int N;
  cin >> N;

  vector<int> graph(N + 1, 0);
  vector<bool> visited(N + 1, false);

  for (int i = 1; i <= N; i++)
    cin >> graph[i];

  int a, b, answer = 0;
  cin >> a >> b;

  queue<pair<int, int>> q;
  q.push({a, 0});

  while (!q.empty())
  {
    pair<int, int> curr = q.front();
    q.pop();

    int curr_node = curr.first;
    int curr_count = curr.second;
    int curr_size = graph[curr_node];

    if (visited[curr_node])
      continue;

    visited[curr_node] = true;

    if (curr_node == b)
    {
      cout << curr_count << endl;

      return 0;
    }

    for (int i = curr_node + curr_size; i <= N; i += curr_size)
      if (!visited[i])
        q.push({i, curr_count + 1});

    for (int i = curr_node - curr_size; i >= 1; i -= curr_size)
      if (!visited[i])
        q.push({i, curr_count + 1});
  }

  cout << -1 << endl;

  return 0;
}