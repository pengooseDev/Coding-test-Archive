#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {1, 1, 1, -1, -1, -1, 0, 0};
vector<int> dy = {0, -1, 1, 0, -1, 1, 1, -1};

void dfs(vector<vector<int>> &g, int x, int y, int m, int n)
{
  g[x][y] = 0;

  for (int i = 0; i < 8; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == 1)
      dfs(g, nx, ny, m, n);
  }
}

int main()
{
  vector<int> answer;

  while (true)
  {
    int m, n;
    cin >> m >> n;

    if (m == 0 && n == 0)
      break;

    vector<vector<int>> graph(m, vector<int>(n, 0));

    for (int i = 0; i < n; i++)
      for (int j = 0; j < m; j++)
        cin >> graph[j][i];

    int u = 0;

    for (int i = 0; i < n; i++)
      for (int j = 0; j < m; j++)
        if (graph[j][i] == 1)
        {
          dfs(graph, j, i, m, n);
          u++;
        }

    answer.push_back(u);
  }

  for (int i : answer)
    cout << i << "\n";

  return 0;
}