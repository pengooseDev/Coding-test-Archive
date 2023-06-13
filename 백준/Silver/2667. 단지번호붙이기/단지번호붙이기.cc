#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int N;
vector<vector<int>> graph;
vector<vector<bool>> visited;
int dx[] = {0, 0, 1, -1};
int dy[] = {1, -1, 0, 0};

int dfs(int x, int y)
{
  visited[x][y] = true;
  int cnt = 1;

  // 전방향 탐색 후, 해당 좌표 visited 및 count 확보.
  for (int i = 0; i < 4; i++)
  {
    int nx = x + dx[i];
    int ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N)
    {
      if (graph[nx][ny] == 1 && !visited[nx][ny])
        cnt += dfs(nx, ny);
    }
  }

  return cnt;
}

int main()
{
  cin >> N;
  graph.resize(N, vector<int>(N));
  visited.resize(N, vector<bool>(N, false));

  for (int i = 0; i < N; i++)
  {
    string curr;
    cin >> curr;

    for (int j = 0; j < curr.length(); j++)
    {
      if (curr[j] == '0')
        graph[i][j] = 0;
      else
        graph[i][j] = 1;
    }
  }

  vector<int> answer;

  for (int i = 0; i < N; i++)
    for (int j = 0; j < N; j++)
      if (graph[i][j] == 1 && !visited[i][j])
        answer.push_back(dfs(i, j));

  sort(answer.begin(), answer.end());

  cout << answer.size() << "\n";

  for (int i : answer)
    cout << i << "\n";

  cout << endl;

  return 0;
}