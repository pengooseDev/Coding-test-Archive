#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {0, 0, -1, 1};
vector<int> dy = {1, -1, 0, 0};

void dfs(vector<vector<char>> &g, int x, int y, int mx, int my, int &answer)
{
  int i = 0;
  if (g[y][x] == 'D')
    i = 0;
  if (g[y][x] == 'U')
    i = 1;
  if (g[y][x] == 'L')
    i = 2;
  if (g[y][x] == 'R')
    i = 3;

  g[y][x] = 'V';

  int nx = x + dx[i];
  int ny = y + dy[i];

  if (nx < 0 || ny < 0 || nx >= mx || ny >= my)
    return;

  if (g[ny][nx] == 'V')
    answer++;

  if (g[ny][nx] != '#' && g[ny][nx] != 'V')
    dfs(g, nx, ny, mx, my, answer);

  g[y][x] = '#'; 
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
    for (int j = 0; j < X; j++)
      if (graph[i][j] != '#')
        dfs(graph, j, i, X, Y, answer);

  cout << answer << endl;

  return 0;
}
