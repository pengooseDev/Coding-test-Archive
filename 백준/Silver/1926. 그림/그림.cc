#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

int dfs(vector<vector<int>> &g, int x, int y, int m, int n)
{
  int size = 1;
  g[x][y] = 0;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == 1)
      size += dfs(g, nx, ny, m, n);
  }

  return size;
}

int main()
{
  int M, N;
  cin >> M >> N;
  vector<vector<int>> graph(M, vector<int>(N, 0));

  /* Create Graph */
  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  /* Get Unions info */
  int unions = 0;
  int max_union_size = 0;

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      if (graph[i][j] == 1)
      {
        unions++;
        int curr_size = dfs(graph, i, j, M, N);
        max_union_size = max(curr_size, max_union_size);
      }

  cout << unions << "\n"
       << max_union_size << endl;

  return 0;
}