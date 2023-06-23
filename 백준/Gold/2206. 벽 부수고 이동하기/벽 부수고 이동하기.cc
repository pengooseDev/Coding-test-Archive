#include <iostream>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

const int dx[4] = {1, -1, 0, 0};
const int dy[4] = {0, 0, 1, -1};

int main()
{
  int N, M;
  cin >> N >> M;

  vector<vector<int>> graph(N, vector<int>(M));
  for (int i = 0; i < N; i++)
  {
    for (int j = 0; j < M; j++)
    {
      char ch;
      cin >> ch;

      graph[i][j] = ch - '0';
    }
  }

  queue<tuple<int, int, int>> q;
  vector<vector<vector<int>>> visited(N, vector<vector<int>>(M, vector<int>(2, 0)));

  q.push({0, 0, 1});
  visited[0][0][1] = 1;

  while (!q.empty())
  {
    int x, y, w;
    tie(x, y, w) = q.front();
    q.pop();

    if (x == M - 1 && y == N - 1)
    {
      cout << visited[y][x][w] << "\n";
      return 0;
    }

    for (int i = 0; i < 4; i++)
    {
      int nx = x + dx[i];
      int ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= M || ny >= N)
        continue;

      if (graph[ny][nx] == 1 && w)
      {
        visited[ny][nx][w - 1] = visited[y][x][w] + 1;
        q.push({nx, ny, w - 1});
      }

      if (graph[ny][nx] == 0 && !visited[ny][nx][w])
      {
        visited[ny][nx][w] = visited[y][x][w] + 1;
        q.push({nx, ny, w});
      }
    }
  }

  cout << "-1" << endl;

  return 0;
}
