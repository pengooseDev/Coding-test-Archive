#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> dx = {1, -1, 0, 0, 0, 0};
vector<int> dy = {0, 0, 1, -1, 0, 0};
vector<int> dz = {0, 0, 0, 0, 1, -1};

int main()
{
  int X, Y, Z;
  cin >> X >> Y >> Z;

  vector<vector<vector<int>>> graph(Z, vector<vector<int>>(Y, vector<int>(X)));
  queue<pair<pair<int, int>, int>> q;

  for (int i = 0; i < Z; i++)
    for (int j = 0; j < Y; j++)
      for (int k = 0; k < X; k++)
      {
        cin >> graph[i][j][k];

        if (graph[i][j][k] == 1)
          q.push({{j, k}, i});
      }

  int answer = -1;

  while (!q.empty())
  {
    int size = q.size();
    answer++;

    for (int i = 0; i < size; i++)
    {
      int x = q.front().first.second;
      int y = q.front().first.first;
      int z = q.front().second;
      q.pop();

      for (int j = 0; j < 6; j++)
      {
        int nx = x + dx[j];
        int ny = y + dy[j];
        int nz = z + dz[j];

        if (nx < 0 || ny < 0 || nz < 0 || nx >= X || ny >= Y || nz >= Z)
          continue;

        if (graph[nz][ny][nx] == 0)
        {
          graph[nz][ny][nx] = 1;
          q.push({{ny, nx}, nz});
        }
      }
    }
  }

  for (int i = 0; i < Z; i++)
    for (int j = 0; j < Y; j++)
      for (int k = 0; k < X; k++)
        if (graph[i][j][k] == 0)
        {
          cout << -1 << endl;

          return 0;
        }

  cout << answer << endl;

  return 0;
}
