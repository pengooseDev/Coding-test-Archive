#include <iostream>
#include <vector>
using namespace std;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  int N, M;
  cin >> N >> M;

  vector<vector<int>> dp(N + 1, vector<int>(N + 1, 0));
  vector<vector<int>> cache(N + 1, vector<int>(N + 1, 0));
  
  for (int i = 1; i <= N; i++)  
    for (int j = 1; j <= N; j++)
    {
      cin >> dp[i][j];
      cache[i][j] = dp[i][j] + cache[i - 1][j] + cache[i][j - 1] - cache[i - 1][j - 1];
    }
  
  for (int i = 0; i < M; i++)
  {
    int x1, y1, x2, y2;
    cin >> x1 >> y1 >> x2 >> y2;

    int res = cache[x2][y2] - cache[x1 - 1][y2] - cache[x2][y1 - 1] +  cache[x1 - 1][y1 - 1];

    cout << res << "\n";
  }

  return 0;
}
