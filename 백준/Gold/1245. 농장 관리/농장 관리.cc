#include <iostream>
#include <vector>
using namespace std;

int dx[8] = {-1, -1, -1, 0, 0, 1, 1, 1};
int dy[8] = {-1, 0, 1, -1, 1, -1, 0, 1};

bool dfs(int x, int y, vector<vector<int>> &g, vector<vector<bool>> &v)
{
  v[x][y] = true;
  bool is_top = true;

  for (int i = 0; i < 8; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= g.size() || ny >= g[0].size())
      continue;

    if (g[nx][ny] == g[x][y])
    {
      if (!v[nx][ny])
        if (!dfs(nx, ny, g, v))
          is_top = false;
    }
    else if (g[nx][ny] > g[x][y])
      is_top = false;
  }

  return is_top;
}

int main()
{
  int X, Y;
  cin >> Y >> X;

  vector<vector<int>> graph(102, vector<int>(72));
  vector<vector<bool>> visited(102, vector<bool>(72));

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      cin >> graph[i][j];

  int answer = 0;
  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      if (!visited[i][j] && dfs(i, j, graph, visited))
        answer++;

  cout << answer << "\n";

  return 0;
}
