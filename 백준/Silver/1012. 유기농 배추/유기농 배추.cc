#include <iostream>
#include <vector>
using namespace std;

// 1. dx, dy 생성
int dx[] = {0, 0, 1, -1};
int dy[] = {1, -1, 0, 0};

// 2. graph 생성.
/*
가로 M, 세로 N의 2차원 벡터.
*/

// 3. dfs 생성
/*

우선, 이 dfs의 노드가 어떻게 사용되는지 이해해야 함.
M * N 2중 포문으로 모든 노드를 순회할 것임.
다만, 배추가 심겨있는 1의 갯수가 아니라 1의 유니온파인드 갯수를 찾는 것이기에, 배추가 심겨있는 곳을 만나면 dfs나 bfs로 인접한 곳을 모두 0으로 바꿔주면 됨! 그럼 최초의 조우때만 실행되고, 내부 dfs를 이용해 전부 0으로 바꿈.

아래의 작업을 해야함.
1. 현재 위치를 0으로 바꿈(방문노드)
2. 상하좌우 방문. (for문)
for문 내부에서 아래의 로직을 확인한다.
- i를 이용해 다음 방문할 nx와 ny를 새로 생성
- 범위를 확인함(nx와 ny가 0이상, m 또는 n미만인지)
- 방문한 노드인지 확인함(해당 노드가 1인지)
 문제가 없다면 해당 노드로 다시 dfs
*/

void dfs(vector<vector<int>> &g, int x, int y, int m, int n)
{
  g[x][y] = 0;

  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < m && ny < n && g[nx][ny] == 1)
      dfs(g, nx, ny, m, n);
  }
}

int main()
{
  int T;
  cin >> T;

  vector<int> answer;

  while (T--)
  {
    int M, N, K;
    cin >> M >> N >> K;
    vector<vector<int>> graph(M, vector<int>(N, 0));

    for (int i = 0; i < K; i++)
    {
      int x, y;
      cin >> x >> y;

      // 고랭지 배추 생성
      graph[x][y] = 1;
    }

    int u = 0;

    for (int i = 0; i < M; i++)
      for (int j = 0; j < N; j++)
        if (graph[i][j] == 1)
        {
          dfs(graph, i, j, M, N);
          u++;
        }

    answer.push_back(u);
  }

  for (int i : answer)
    cout << i << "\n";

  cout << endl;

  return 0;
}