#include <iostream>
#include <vector>
using namespace std;

struct Pos
{
  int x, y;
};

vector<int> dx = {-1, 1, 0, 0};
vector<int> dy = {0, 0, -1, 1};

int dfs(vector<vector<int>> &Map, vector<vector<bool>> &visited, int x, int y, vector<Pos> &wall)
{
  if (x < 0 || x >= Map.size() || y < 0 || y >= Map[0].size() || visited[x][y] || Map[x][y] != 0)
  {
    return 0;
  }

  visited[x][y] = true;
  int cnt = 1;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < Map.size() && ny < Map[0].size())
    {
      if (Map[nx][ny] == 0)
      {
        cnt += dfs(Map, visited, nx, ny, wall);
      }
      else if (!visited[nx][ny])
      {
        visited[nx][ny] = true;
        wall.push_back({nx, ny});
      }
    }
  }
  return cnt;
}

int main()
{
  int N, M;
  scanf("%d %d", &N, &M);

  vector<vector<int>> Map(N, vector<int>(M, 0));
  vector<vector<bool>> visited(N, vector<bool>(M, false));

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < M; j++)
    {
      scanf("%1d", &Map[i][j]);
    }
  }

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < M; j++)
    {
      if (Map[i][j] == 0 && !visited[i][j])
      {
        vector<Pos> wall;
        int cnt = dfs(Map, visited, i, j, wall);
        for (Pos &p : wall)
        {
          Map[p.x][p.y] += cnt;
          visited[p.x][p.y] = false;
        }
      }
    }
  }

  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < M; j++)
    {
      printf("%d", Map[i][j] % 10);
    }
    printf("\n");
  }
  return 0;
}
