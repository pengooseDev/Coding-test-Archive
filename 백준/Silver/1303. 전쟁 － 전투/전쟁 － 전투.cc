#include <iostream>
#include <vector>
#include <queue>
using namespace std;

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

int main()
{
  int X, Y, w = 0, b = 0;
  cin >> X >> Y;

  vector<vector<char>> graph(Y, vector<char>(X));
  vector<vector<bool>> visited(Y, vector<bool>(X, false));

  for (int i = 0; i < Y; i++)
    for (int j = 0; j < X; j++)
      cin >> graph[i][j];

  for (int i = 0; i < Y; i++)
  {
    for (int j = 0; j < X; j++)
    {
      if (!visited[i][j])
      {
        queue<pair<int, int>> q;
        q.push(make_pair(j, i));
        visited[i][j] = true;

        char curr_team = graph[i][j];
        int amount = 0;

        while (!q.empty())
        {
          pair<int, int> curr_node = q.front();
          q.pop();
          amount++;

          for (int k = 0; k < 4; k++)
          {
            int nx = curr_node.first + dx[k];
            int ny = curr_node.second + dy[k];

            if (nx < 0 || ny < 0 || nx >= X || ny >= Y)
              continue;

            if (!visited[ny][nx] && graph[ny][nx] == curr_team)
            {
              q.push(make_pair(nx, ny));
              visited[ny][nx] = true;
            }
          }
        }

        int res = amount * amount;

        if (curr_team == 'W')
          w += res;
        else
          b += res;
      }
    }
  }

  cout << w << ' ' << b << endl;

  return 0;
}