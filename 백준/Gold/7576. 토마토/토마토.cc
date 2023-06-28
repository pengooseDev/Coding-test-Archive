#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

int main()
{
  int X, Y;
  cin >> X >> Y;

  vector<vector<int>> graph(Y, vector<int>(X));
  queue<pair<int, int>> q;

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
    {
      cin >> graph[i][j];

      if (graph[i][j] == 1)
        q.push({i, j});
    }

  int answer = -1;

  while (!q.empty())
  {
    int size = q.size();
    answer++;

    for (int i = 0; i < size; i++)
    {
      int x = q.front().second;
      int y = q.front().first;
      q.pop();

      for (int j = 0; j < 4; j++)
      {
        int nx = x + dx[j];
        int ny = y + dy[j];

        if (nx < 0 || ny < 0 || nx >= X || ny >= Y)
          continue;

        if (graph[ny][nx] == 0)
        {
          graph[ny][nx] = 1;
          q.push({ny, nx});
        }
      }
    }
  }

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      if (graph[i][j] == 0)
      {
        cout << -1 << endl;

        return 0;
      }

  cout << answer << endl;

  return 0;
}
