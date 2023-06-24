#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {0, 0, 1, -1};
vector<int> dy = {1, -1, 0, 0};

struct Result
{
  int k = 0;
  int v = 0;
};

Result dfs(vector<vector<char>> &g, int x, int y, int m, int n, Result &res)
{

  if (g[x][y] == 'k')
    res.k++;
  if (g[x][y] == 'v')
    res.v++;

  g[x][y] = '#';

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < m && ny < n && (g[nx][ny] != '#'))
      dfs(g, nx, ny, m, n, res);
  }

  return res;
}

int main()
{
  int M, N;
  cin >> M >> N;
  Result answer;

  vector<vector<char>> graph(M, vector<char>(N));

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      if (graph[i][j] != '#')
      {
        Result res;
        dfs(graph, i, j, M, N, res);
        res.k > res.v ? res.v = 0 : res.k = 0;

        answer.k += res.k;
        answer.v += res.v;
      }

  cout << answer.k << ' ' << answer.v << endl;

  return 0;
}