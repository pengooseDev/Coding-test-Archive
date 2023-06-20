#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int main()
{
  int N, M;
  cin >> N >> M;
  vector<vector<int>> graph(N + 1);

  for (int i = 0; i < M; i++)
  {
    int A, B;
    cin >> A >> B;
    graph[B].push_back(A);
  }

  vector<int> counts(N + 1, 0);
  int answer = 0;

  for (int i = 1; i <= N; i++)
  {
    vector<bool> visited(N + 1, false);
    queue<int> q;
    q.push(i);
    visited[i] = true;

    int hack = 0;

    while (!q.empty())
    {
      int curr = q.front();
      q.pop();
      hack++;

      for (int j : graph[curr])
        if (!visited[j])
        {
          q.push(j);
          visited[j] = true;
        }
    }

    counts[i] = hack;
    answer = max(answer, hack);
  }

  for (int i = 1; i <= N; i++)
    if (counts[i] == answer)
      cout << i << " ";

  return 0;
}