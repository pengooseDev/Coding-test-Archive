#include <iostream>
#include <vector>
#include <queue>
using namespace std;

bool check(vector<vector<int>> &graph, int N)
{
  vector<int> v(N + 1, 0);

  for (int i = 1; i <= N; i++)
  {
    if (v[i] == 0)
    {
      queue<int> q;
      q.push(i);
      v[i] = 1;

      while (!q.empty())
      {
        int curr = q.front();
        q.pop();

        for (int j : graph[curr])
          if (v[j] == 0)
          {
            q.push(j);
            v[j] = -v[curr];
          }
          else if (v[j] == v[curr])
            return false;
      }
    }
  }

  return true;
}

int main()
{
  int K;
  cin >> K;

  while (K--)
  {
    int X, Y;
    cin >> X >> Y;

    vector<vector<int>> graph(X + 1);

    for (int i = 0; i < Y; ++i)
    {
      int s, e;
      cin >> s >> e;

      graph[s].push_back(e);
      graph[e].push_back(s);
    }

    if (check(graph, X))
      cout << "YES\n";
    else
      cout << "NO\n";
  }

  return 0;
}
