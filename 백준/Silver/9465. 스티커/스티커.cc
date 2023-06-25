#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int T;
  cin >> T;
  
  while(T--)
  {
    int n;
    cin >> n;
    vector<vector<int>> score(2, vector<int>(n + 1, 0));
    vector<vector<int>> dp(2, vector<int>(n + 1, 0));
    
    for (int i = 0; i < 2; i++)
      for (int j = 1; j <= n; j++)
        cin >> score[i][j];
    
    dp[0][1] = score[0][1];
    dp[1][1] = score[1][1];
    
    for (int i = 2; i <= n; i++)
    {
      dp[0][i] = max(dp[1][i-1], dp[1][i-2]) + score[0][i];
      dp[1][i] = max(dp[0][i-1], dp[0][i-2]) + score[1][i];
    }
    
    cout << max(dp[0][n], dp[1][n]) << '\n';
  }
  
  return 0;
}