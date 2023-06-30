#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {1, 1, 1};
vector<int> dy = {-1, 0, 1};

bool dfs(vector<vector<char>> &g, int x, int y, int mx, int my)
{
  if (x == mx - 1)
    return true;

  for (int i = 0; i < 3; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= mx || ny >= my)
      continue;

    if (g[ny][nx] == 'x')
      continue;

    g[ny][nx] = 'x';

    if (dfs(g, nx, ny, mx, my))
      return true;
  }

  return false;
}

int main()
{
  int X, Y;
  cin >> Y >> X;
  vector<vector<char>> graph(Y, vector<char>(X, '#'));

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      cin >> graph[i][j];

  int answer = 0;
  for (int i = 0; i < Y; i++)
    if (dfs(graph, 0, i, X, Y))
      answer++;

  cout << answer << endl;

  return 0;
}