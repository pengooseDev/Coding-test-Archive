#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

void dfs(vector<vector<int>> &g, int x, int y, int n, int limit)
{
  g[x][y] = 0;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < n && g[nx][ny] > limit)
      dfs(g, nx, ny, n, limit);
  }
}

int main()
{
  int n;
  cin >> n;
  vector<vector<int>> graph(n, vector<int>(n, 0));
  int max_height = 0;
  int answer = 0;

  for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
    {
      int tmp;
      cin >> tmp;
      if (max_height < tmp)
        max_height = tmp;

      graph[i][j] = tmp;
    }

  while (max_height--)
  {
    vector<vector<int>> c_graph = graph;
    int u = 0;

    for (int i = 0; i < n; i++)
      for (int j = 0; j < n; j++)
        if (c_graph[i][j] > max_height)
        {
          dfs(c_graph, i, j, n, max_height);
          u++;
        }
    if (u > answer)
      answer = u;
  }

  cout << answer << endl;

  return 0;
}