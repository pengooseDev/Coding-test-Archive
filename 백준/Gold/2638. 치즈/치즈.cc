#include <vector>
#include <iostream>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

// 공기 노드 체크
void dfs(vector<vector<int>> &g, vector<vector<bool>> &a, int x, int y, int mx, int my)
{
  a[y][x] = true;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= mx || ny >= my)
      continue;

    // 현재 방문하지 않은 공기노드
    if (g[ny][nx] == 0 && !a[ny][nx])
      dfs(g, a, nx, ny, mx, my);
  }
}

int main()
{
  int X, Y;
  cin >> Y >> X;

  vector<vector<int>> graph(Y, vector<int>(X, -1));

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      cin >> graph[i][j];

  int answer = 0;

  while (true)
  {
    int remain_cheeses = 0;
    vector<vector<bool>> air(Y, vector<bool>(X, false));

    dfs(graph, air, 0, 0, X, Y);

    for (int i = 0; i < Y; i++)
      for (int j = 0; j < X; j++)
        if (graph[i][j] == 1)
        {
          int air_cnt = 0;

          for (int k = 0; k < 4; k++)
          {
            int nx = j + dx[k];
            int ny = i + dy[k];

            if (air[ny][nx])
              air_cnt++;
          }

          if (air_cnt >= 2)
            graph[i][j] = 0;
          else
            remain_cheeses++;
        }

    answer++;

    if (remain_cheeses == 0)
      break;
  }

  cout << answer << endl;

  return 0;
}