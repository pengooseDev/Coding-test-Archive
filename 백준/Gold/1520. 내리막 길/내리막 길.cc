#include <iostream>
#include <vector>
#include <limits.h>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

int dfs(vector<vector<int>> &g, vector<vector<int>> &dp, int x, int y, int m, int n)
{
  int res = 0;

  if (x == n - 1 && y == m - 1)
    return 1;

  /* 방문한 노드일 경우, 메모이제이션값 사용 */
  if (dp[y][x] != -1)
    return dp[y][x];

  int curr = g[y][x];
  g[y][x] = INT_MAX;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m && g[ny][nx] < curr)
      res += dfs(g, dp, nx, ny, m, n);
  }

  g[y][x] = curr;
  dp[y][x] = res;

  return res;
}

int main()
{
  int M, N;
  cin >> M >> N;
  vector<vector<int>> graph(M, vector<int>(N));
  vector<vector<int>> dp(M, vector<int>(N, -1));

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  int answer;
  answer = dfs(graph, dp, 0, 0, M, N);

  cout << answer << endl;

  return 0;
}