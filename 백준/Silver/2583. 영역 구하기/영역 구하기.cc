#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> dx = {0, 0, 1, -1};
vector<int> dy = {1, -1, 0, 0};

int dfs(vector<vector<int>> &g, int x, int y, int m, int n)
{
  g[x][y] = 1;

  int union_size = 1;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == 0)
      union_size += dfs(g, nx, ny, m, n);
  }

  return union_size;
}

int main()
{
  int M, N, K;
  cin >> M >> N >> K;
  vector<int> dfs_sizes;
  vector<vector<int>> graph(M, vector<int>(N, 0));

  while (K--)
  {
    int x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;

    /* 직사각형 생성 범위 체크 */
    for (int i = y1; i < y2; i++)
      for (int j = x1; j < x2; j++)
        graph[i][j] = 1;
  }

  int unions = 0;
  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      if (graph[i][j] == 0)
      {
        int union_size = dfs(graph, i, j, M, N);
        dfs_sizes.push_back(union_size);
        unions++;
      }

  sort(dfs_sizes.begin(), dfs_sizes.end());

  cout << unions << "\n";

  for (int i : dfs_sizes)
    cout << i << " ";

  cout << endl;

  return 0;
}