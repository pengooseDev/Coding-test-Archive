#include <iostream>
#include <vector>
using namespace std;

vector<int> hx = {0, 0};
vector<int> hy = {1, -1};

vector<int> vx = {1, -1};
vector<int> vy = {0, 0};

void dfs(vector<vector<char>> &g, int x, int y, int m, int n)
{
  char curr = g[x][y];
  g[x][y] = '.';

  if (curr == '|')
  {
    for (int i = 0; i < 2; i++)
    {
      int nx = x + vx[i];
      int ny = y + vy[i];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == '|')
        dfs(g, nx, ny, m, n);
    }
  }
  else
  {
    for (int i = 0; i < 2; i++)
    {
      int nx = x + hx[i];
      int ny = y + hy[i];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == '-')
        dfs(g, nx, ny, m, n);
    }
  }
}

int main()
{
  int M, N;
  cin >> M >> N;
  vector<vector<char>> graph(M, vector<char>(N));

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  int answer = 0;
  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      if (graph[i][j] == '-' || graph[i][j] == '|')
      {
        answer++;
        dfs(graph, i, j, M, N);
      }

  cout << answer << endl;

  return 0;
}