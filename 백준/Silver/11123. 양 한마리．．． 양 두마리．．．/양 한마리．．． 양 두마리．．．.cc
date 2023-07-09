#include <iostream>
#include <vector>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

void dfs(vector<vector<char>> &g, int x, int y, int mx, int my)
{
  g[y][x] = '.';

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= mx || ny >= my)
      continue;

    if (g[ny][nx] == '#')
      dfs(g, nx, ny, mx, my);
  }
}

int main()
{
  int T;
  cin >> T;

  while(T--)
  {
    int X, Y;
    cin >> Y >> X;

    vector<vector<char>> graph(Y, vector<char>(X));

    for (int i = 0; i < Y; i++)
      for (int j = 0; j < X; j++)
        cin >> graph[i][j];

    int answer = 0;    

    for (int i = 0; i < Y; i++)
      for (int j = 0; j < X; j++)
        if (graph[i][j] == '#')
        {
          answer++;
          dfs(graph, j, i, X, Y);
        }

    cout << answer << endl;
  }
}