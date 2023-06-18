#include <iostream>
#include <vector>
using namespace std;

// 빙산이 두 덩어리 이상으로 나뉘는 최초의 시간(년).
/*
dfs 돌 때, 이전 dfs에서 해당 빙하가 녹아버려 0이 되었다면, 해당 노드를 배제하고 계산해야함.
해당 노드는 2차원 visited 노드로 관리.

dfs에선 빙하 녹이기만 수행
*/

vector<int> dx = {1, -1, 0, 0};
vector<int> dy = {0, 0, 1, -1};

void dfs(vector<vector<int>> &g, vector<vector<bool>> &v, int x, int y, int m, int n)
{
  // 해당 노드 방문처리
  v[y][x] = true;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m)
      continue;

    if (!v[ny][nx] && g[ny][nx] > 0)
      dfs(g, v, nx, ny, m, n);
  }
}

int main()
{
  int M, N;
  cin >> M >> N;
  vector<vector<int>> graph(M, vector<int>(N, 0));
  vector<vector<bool>> visited(M, vector<bool>(N, false));

  for (int i = 0; i < M; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  int answer = 0;

  while (true)
  {
    // 조건 초기화
    int piece = 0;
    visited = vector<vector<bool>>(M, vector<bool>(N, false));

    // 빙하 세기. 처음부터 두 조각일 수 있음.
    for (int i = 0; i < M; i++)
      for (int j = 0; j < N; j++)
        if (graph[i][j] > 0 && !visited[i][j])
        {
          piece++;
          dfs(graph, visited, j, i, M, N);
        }

    // 분기처리
    if (piece >= 2)
    {
      cout << answer << endl;

      return 0;
    }

    if (piece == 0)
    {
      cout << 0 << endl;

      return 0;
    }

    // 빙하 녹은양 체크
    vector<vector<int>> melted_amount(M, vector<int>(N, 0));
    for (int i = 0; i < M; i++)
      for (int j = 0; j < N; j++)
        if (graph[i][j] > 0)
          for (int k = 0; k < 4; k++)
          {
            int nx = j + dx[k];
            int ny = i + dy[k];

            if (nx < 0 || ny < 0 || nx >= N || ny >= M)
              continue;

            if (graph[ny][nx] == 0)
              melted_amount[i][j]++;
          }

    // 녹은 빙하 계산
    for (int i = 0; i < M; i++)
      for (int j = 0; j < N; j++)
        graph[i][j] = max(0, graph[i][j] - melted_amount[i][j]);

    answer++;
  }

  cout << answer << endl;

  return 0;
}
